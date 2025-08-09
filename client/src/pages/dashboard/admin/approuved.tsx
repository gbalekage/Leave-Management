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

// ✅ ShadCN table components
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import axios from "axios";
import { toast } from "sonner";

interface Leave {
  id: string;
  type: string;
  startDate: string;
  endDate: string;
  duration: number;
  reason: string;
  user: { name: string };
  reviewer?: { name: string } | null;
}

const ApprouvedLeaves = () => {
  const { user } = useContext(UserContext);
  const [leaves, setLeaves] = useState<Leave[]>([]);

  useEffect(() => {
    const fetchLeaves = async () => {
      const serverUrl = import.meta.env.VITE_SERVER_URL;
      if (!serverUrl) {
        toast.error("L'URL du serveur n'est pas configurée.");
        return;
      }

      const res = await axios.get(`${serverUrl}/api/leaves/approved`);
      const data = res.data.leaves
      setLeaves(data);
    };

    fetchLeaves();
  }, []);

  return (
    <AdminLayout>
      <header className="flex h-16 items-center justify-between gap-2 border-b">
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
        <h1 className="text-lg font-semibold">Agents en Congé</h1>
        <div className="p-3">
          <ThemeBtn />
        </div>
      </header>

      <div className="p-4">
        {leaves.length === 0 ? (
          <p className="text-sm text-muted-foreground">Aucun congé approuvé.</p>
        ) : (
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Nom de l’agent</TableHead>
                <TableHead>Type</TableHead>
                <TableHead>Du</TableHead>
                <TableHead>Au</TableHead>
                <TableHead>Durée (jours)</TableHead>
                <TableHead>Motif</TableHead>
                <TableHead>Approuvé par</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {leaves.map((leave) => (
                <TableRow key={leave.id}>
                  <TableCell>{leave.user.name}</TableCell>
                  <TableCell>{leave.type}</TableCell>
                  <TableCell>
                    {new Date(leave.startDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    {new Date(leave.endDate).toLocaleDateString()}
                  </TableCell>
                  <TableCell>{leave.duration}</TableCell>
                  <TableCell>{leave.reason}</TableCell>
                  <TableCell>{leave.reviewer?.name || "—"}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        )}
      </div>
    </AdminLayout>
  );
};

export default ApprouvedLeaves;
