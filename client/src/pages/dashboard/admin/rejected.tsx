"use client";

import AdminLayout from "@/components/admin/layout";
import { ThemeBtn } from "@/components/global/theme-btn";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import { Input } from "@/components/ui/input";
import { Separator } from "@/components/ui/separator";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Table, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { UserContext } from "@/context/user";
import type { Leave } from "@/types/user";
import axios from "axios";
import { Loader } from "lucide-react";
import { useContext, useEffect, useState } from "react";
import { toast } from "sonner";

const RejectedLeaves = () => {
  const { user } = useContext(UserContext);
  const [search, setSearch] = useState("");
  const [leaves, setLeaves] = useState<Leave[]>([]);

  useEffect(() => {
    const fetchLeaves = async () => {
      try {
        const serverUrl = import.meta.env.VITE_SERVER_URL;
        if (!serverUrl) {
          toast.error("L'URL du serveur n'est pas configurée.");
          return;
        }

        const res = await axios.get(`${serverUrl}/api/leaves/all-leaves`);
        setLeaves(res.data.users);
      } catch (error) {
        console.error("Erreur lors du chargement des conges :", error);
      }
    };

    fetchLeaves();
  }, []);

  const filteredLeaves = leaves.filter((u) =>
    `${u.type} ${u.reason}`.toLowerCase().includes(search.toLowerCase())
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
          <h1 className="text-lg font-semibold">Demande Regeter</h1>
        </div>
        <div className="p-3">
          <ThemeBtn />
        </div>
      </header>
      <div className="p-4 space-y-4">
        <Input
          placeholder="Rechercher..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="max-w-md"
        />

        {filteredLeaves.length === 0 ? (
          <div className="flex justify-center items-center text-center text-muted-foreground py-10">
            <Loader className="animate-spin mr-2" />
            <p>Chargement...</p>
          </div>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Type</TableHead>
                <TableHead>Debut</TableHead>
                <TableHead>Fin</TableHead>
                <TableHead>Agent</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
          </Table>
        )}
      </div>
    </AdminLayout>
  );
};

export default RejectedLeaves;
