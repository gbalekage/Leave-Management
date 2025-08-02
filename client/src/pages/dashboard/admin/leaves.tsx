"use client";

import AdminLayout from "@/components/admin/layout";
import {ThemeBtn} from "@/components/global/theme-btn";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
} from "@/components/ui/breadcrumb";
import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import {Separator} from "@/components/ui/separator";
import {SidebarTrigger} from "@/components/ui/sidebar";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table";
import {UserContext} from "@/context/user";
import type {Leave} from "@/types/user";
import axios from "axios";
import {Loader} from "lucide-react";
import {useContext, useEffect, useState} from "react";
import {toast} from "sonner";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogDescription,
    DialogFooter,
} from "@/components/ui/dialog";
import {Textarea} from "@/components/ui/textarea";


const AllLeaves = () => {
    const {user} = useContext(UserContext);
    const [search, setSearch] = useState("");
    const [leaves, setLeaves] = useState<Leave[]>([]);
    const [loading, setLoading] = useState(false);
    const [loading2, setLoading2] = useState(false);
    const token = user?.token;
    const [selectedLeaveId, setSelectedLeaveId] = useState<string | null>(null);
    const [comment, setComment] = useState("");
    const [openDialog, setOpenDialog] = useState(false);


    const fetchLeaves = async () => {
        try {
            const serverUrl = import.meta.env.VITE_SERVER_URL;
            if (!serverUrl) {
                toast.error("L'URL du serveur n'est pas configurée.");
                return;
            }

            const res = await axios.get(`${serverUrl}/api/leaves/all-leaves`);
            setLeaves(res.data.leaves);
        } catch (error) {
            console.error("Erreur lors du chargement des conges :", error);
        }
    };

    useEffect(() => {
        fetchLeaves();
    }, []);

    const handleAccept = async (leaveId: string) => {
        if (!token) return toast.error("Utilisateur non authentifié.");
        setLoading(true);
        try {
            const serverUrl = import.meta.env.VITE_SERVER_URL;
            const res = await axios.patch(
                `${serverUrl}/api/leaves/accept/${leaveId}`,
                {},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            toast.success("Demande approuvée avec succès !");
            fetchLeaves(); // Refresh the list
        } catch (err: any) {
            toast.error(err.response?.data?.message || "Erreur lors de l'approbation.");
        } finally {
            setLoading(false);
        }
    };

    const handleReject = async () => {
        if (!token || !selectedLeaveId) return toast.error("Utilisateur non authentifié.");
        setLoading2(true);
        try {
            const serverUrl = import.meta.env.VITE_SERVER_URL;
            const res = await axios.patch(
                `${serverUrl}/api/leaves/reject/${selectedLeaveId}`,
                {comment},
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                }
            );
            toast.success("Demande rejetée avec succès !");
            setOpenDialog(false);
            setComment("");
            setSelectedLeaveId(null);
            fetchLeaves();
        } catch (err: any) {
            toast.error(err.response?.data?.message || "Erreur lors du rejet.");
        } finally {
            setLoading2(false);
        }
    };


    const filteredLeaves = leaves.filter((u) =>
        `${u.type} ${u.reason}`.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <AdminLayout>
            <header className="flex h-16 shrink-0 items-center justify-between gap-2 border-b">
                <div className="flex items-center gap-2 px-3">
                    <SidebarTrigger/>
                    <Separator orientation="vertical" className="mr-2 h-4"/>
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
                    <ThemeBtn/>
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
                        <p>Pas de conge</p>
                    </div>
                ) : (
                    <Table>
                        <TableHeader>
                            <TableRow>
                                <TableHead>Agent</TableHead>
                                <TableHead>Type</TableHead>
                                <TableHead>Debut</TableHead>
                                <TableHead>Fin</TableHead>
                                <TableHead>Statut</TableHead>
                                <TableHead>Actions</TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {filteredLeaves.map((leave) => (
                                <TableRow key={leave.id} className="cursor-pointer">
                                    <TableCell>{leave.user?.name || "Inconnu"}</TableCell>
                                    <TableCell>{leave.type}</TableCell>
                                    <TableCell>
                                        {new Date(leave.startDate).toLocaleDateString()}
                                    </TableCell>
                                    <TableCell>
                                        {new Date(leave.endDate).toLocaleDateString()}
                                    </TableCell>
                                    <TableCell>{leave.status}</TableCell>
                                    <TableCell className="flex gap-2">
                                        {leave.status === "PENDING" && (
                                            <>
                                                <Button
                                                    variant="default"
                                                    size="sm"
                                                    disabled={loading}
                                                    onClick={() => handleAccept(leave.id)}
                                                >
                                                    {loading ? (
                                                        <div className="flex items-center justify-center text-xs ">
                                                            <Loader className="animate-spin mr-2"/>
                                                            <p>En cours...</p>
                                                        </div>
                                                    ) : (
                                                        <p>Approuver</p>
                                                    )}
                                                </Button>
                                                <Button
                                                    variant="destructive"
                                                    size="sm"
                                                    disabled={loading2}
                                                    onClick={() => {
                                                        setSelectedLeaveId(leave.id);
                                                        setOpenDialog(true);
                                                    }}
                                                >
                                                    {loading2 ? (
                                                        <div className="flex items-center justify-center text-xs">
                                                            <Loader className="animate-spin mr-2"/>
                                                            <p>En cours...</p>
                                                        </div>
                                                    ) : (
                                                        <p>Rejeter</p>
                                                    )}
                                                </Button>

                                            </>
                                        )}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                )}
            </div>

            <Dialog open={openDialog} onOpenChange={setOpenDialog}>
                <DialogContent>
                    <DialogHeader>
                        <DialogTitle>Rejeter la demande</DialogTitle>
                        <DialogDescription>
                            Entrez la raison du rejet pour cette demande de congé.
                        </DialogDescription>
                    </DialogHeader>
                    <Textarea
                        placeholder="Entrez un commentaire..."
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                    <DialogFooter className="mt-4">
                        <Button variant="outline" onClick={() => setOpenDialog(false)}>Annuler</Button>
                        <Button
                            variant="destructive"
                            onClick={handleReject}
                            disabled={loading2 || comment.trim() === ""}
                        >
                            {loading2 ? (
                                <div className="flex items-center justify-center text-xs">
                                    <Loader className="animate-spin mr-2"/>
                                    <p>Rejet en cours...</p>
                                </div>
                            ) : (
                                <p>Confirmer</p>
                            )}
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>

        </AdminLayout>
    );
};

export default AllLeaves;
