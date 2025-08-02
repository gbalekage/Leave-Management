"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import type { User } from "@/types/user";
import { ScrollArea } from "../ui/scroll-area";

// export type User = {
//   id: number;
//   name: string;
//   email: string;
//   matricule: string;
//   role: string;
//   isVerified: boolean;
//   lastLogin: string | null;
// };

interface Leave {
  id: number;
  type: string;
  startDate: string;
  endDate: string;
  reason: string;
  status: string;
}

interface UserDetailsDialogProps {
  user: (User & { leaves?: Leave[] }) | null;
  open: boolean;
  onClose: () => void;
}

export const UserDetailsDialog = ({
  user,
  open,
  onClose,
}: UserDetailsDialogProps) => {
  if (!user) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle>Détails de l'utilisateur</DialogTitle>
        </DialogHeader>

        <div className="space-y-2 text-sm">
          <p>
            <strong>Nom:</strong> {user.name}
          </p>
          <p>
            <strong>Email:</strong> {user.email}
          </p>
          <p>
            <strong>Matricule:</strong> {user.matricule}
          </p>
          <p>
            <strong>Rôle:</strong> {user.role}
          </p>
          <p>
            <strong>Statut:</strong>{" "}
            {user.isVerified ? "Vérifié" : "Non vérifié"}
          </p>
          <p>
            <strong>Dernière connexion:</strong>{" "}
            {user.lastLogin
              ? new Date(user.lastLogin).toLocaleString()
              : "Jamais connecté"}
          </p>
        </div>

        <hr className="my-4" />

        <div>
          <h2 className="font-semibold mb-2">Congés</h2>
          {user.leaves && user.leaves.length > 0 ? (
            <ScrollArea className="max-h-52 space-y-3 pr-2">
              {user.leaves.map((leave) => (
                <div
                  key={leave.id}
                  className="border p-2 rounded-md text-sm bg-muted/50"
                >
                  <p>
                    <strong>Type:</strong> {leave.type}
                  </p>
                  <p>
                    <strong>Durée:</strong>{" "}
                    {new Date(leave.startDate).toLocaleDateString()} →{" "}
                    {new Date(leave.endDate).toLocaleDateString()}
                  </p>
                  <p>
                    <strong>Raison:</strong> {leave.reason}
                  </p>
                  <p>
                    <strong>Statut:</strong> {leave.status}
                  </p>
                </div>
              ))}
            </ScrollArea>
          ) : (
            <p className="text-muted-foreground italic">
              Aucun congé trouvé pour cet utilisateur.
            </p>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};
