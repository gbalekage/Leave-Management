"use client";

import AdminLayout from "@/components/admin/layout";
import { ThemeBtn } from "@/components/global/theme-btn";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { UserContext } from "@/context/user";
import { useContext, useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import axios from "axios";
import { toast } from "sonner";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { UserDetailsDialog } from "@/components/admin/userDialog";
import { Eye, Loader } from "lucide-react";
import { UserEditDialog } from "@/components/admin/UserEditDialog";
import { DeleteUserDialog } from "@/pages/auth/DeleteUserDialog";

type Leave = {
  id: number;
  type: string;
  startDate: string;
  endDate: string;
  reason: string;
  status: string;
};

type User = {
  id: number;
  name: string;
  email: string;
  matricule: string;
  role: string;
  isVerified: boolean;
  lastLogin: string | null;
  leaves?: Leave[];
};

const UsersList = () => {
  const { user } = useContext(UserContext);
  const [users, setUsers] = useState<User[]>([]);
  const [search, setSearch] = useState("");
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [userToDelete, setUserToDelete] = useState<User | null>(null);
  const [loading, setLoading] = useState(false);

  const openUserDialog = (user: User) => {
    setSelectedUser(user);
    setDialogOpen(true);
  };

  const closeUserDialog = () => {
    setSelectedUser(null);
    setDialogOpen(false);
  };

  const confirmDelete = (user: User) => {
    setUserToDelete(user);
    setDeleteDialogOpen(true);
  };

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const serverUrl = import.meta.env.VITE_SERVER_URL;
        if (!serverUrl) {
          toast.error("L'URL du serveur n'est pas configurée.");
          return;
        }

        const res = await axios.get(`${serverUrl}/api/users/all-users`);
        setUsers(res.data.users);
      } catch (error) {
        console.error("Erreur lors du chargement des utilisateurs :", error);
      }
    };

    fetchUsers();
  }, []);

  const handleEdit = (user: User) => {
    setSelectedUser(user);
    setEditDialogOpen(true);
  };

  const handleDelete = async (user: User) => {
    setLoading(true);
    try {
      const serverUrl = import.meta.env.VITE_SERVER_URL;
      await axios.delete(`${serverUrl}/api/users/delete-user/${user.id}`);
      setUsers((prev) => prev.filter((u) => u.id !== user.id));
      toast.success("Utilisateur supprimé avec succès.");
    } catch (error) {
      console.error("Erreur lors de la suppression :", error);
      toast.error("Erreur lors de la suppression de l'utilisateur.");
    } finally {
      setDeleteDialogOpen(false);
      setUserToDelete(null);
      setLoading(false);
    }
  };

  const handleSaveUser = async (updatedUser: User) => {
    setLoading(true);
    try {
      const serverUrl = import.meta.env.VITE_SERVER_URL;
      await axios.put(
        `${serverUrl}/api/users/update-user/${updatedUser.id}`,
        updatedUser
      );
      setUsers((prev) =>
        prev.map((u) => (u.id === updatedUser.id ? updatedUser : u))
      );
      toast.success("Utilisateur mis à jour.");
    } catch (error) {
      toast.error("Erreur lors de la mise à jour.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const filteredUsers = users.filter((u) =>
    `${u.name} ${u.email} ${u.matricule} ${u.role}`
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  return (
    <AdminLayout>
      <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b">
        <div className="flex items-center gap-2 px-3">
          <SidebarTrigger />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem className="hidden md:block">
                <BreadcrumbLink>Bonjour, {user?.name}</BreadcrumbLink>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
        <div>
          <h1 className="text-lg font-semibold">Liste des utilisateurs</h1>
        </div>
        <div className="p-3">
          <ThemeBtn />
        </div>
      </header>

      <div className="p-4 space-y-4">
        <Input
          placeholder="Rechercher par nom, email, matricule, rôle..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-md"
        />

        {filteredUsers.length === 0 ? (
          <div className="flex justify-center items-center text-center text-muted-foreground py-10">
            <Loader className="animate-spin mr-2" />
            <p>Chargement des utilisateur...</p>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nom</TableHead>
                <TableHead>Email</TableHead>
                <TableHead>Matricule</TableHead>
                <TableHead>Rôle</TableHead>
                <TableHead>Statut</TableHead>
                <TableHead>Dernière connexion</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredUsers.map((u) => (
                <TableRow key={u.id} className="cursor-pointer">
                  <TableCell>{u.name}</TableCell>
                  <TableCell>{u.email}</TableCell>
                  <TableCell>{u.matricule}</TableCell>
                  <TableCell>{u.role}</TableCell>
                  <TableCell>
                    {u.isVerified ? (
                      <span className="text-green-600 font-medium">
                        Vérifié
                      </span>
                    ) : (
                      <span className="text-red-600 font-medium">
                        Non vérifié
                      </span>
                    )}
                  </TableCell>
                  <TableCell>
                    {u.lastLogin
                      ? new Date(u.lastLogin).toLocaleString()
                      : "Jamais connecté"}
                  </TableCell>
                  <TableCell className="flex gap-2">
                    <Button
                      onClick={() => openUserDialog(u)}
                      variant={"outline"}
                    >
                      <Eye />
                    </Button>
                    <Button
                      variant={"outline"}
                      onClick={() => handleEdit(u)}
                      aria-label={`Éditer ${u.name}`}
                    >
                      Modifier
                    </Button>
                    <Button
                      variant={"destructive"}
                      onClick={() => confirmDelete(u)}
                      aria-label={`Supprimer ${u.name}`}
                    >
                      Supprimer
                    </Button>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>

      <UserDetailsDialog
        user={selectedUser}
        open={dialogOpen}
        onClose={closeUserDialog}
      />

      <UserEditDialog
        open={editDialogOpen}
        user={selectedUser}
        onClose={() => setEditDialogOpen(false)}
        onSave={handleSaveUser}
        loading={loading}
      />

      <DeleteUserDialog
        open={deleteDialogOpen}
        user={userToDelete}
        onClose={() => setDeleteDialogOpen(false)}
        onConfirm={handleDelete}
        loading={loading}
      />
    </AdminLayout>
  );
};

export default UsersList;
