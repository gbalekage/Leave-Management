"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import type { User } from "@/types/user";
import { Loader } from "lucide-react";

interface DeleteUserDialogProps {
  user: User | null;
  open: boolean;
  onClose: () => void;
  onConfirm: (user: User) => void;
  loading: boolean;
}

export const DeleteUserDialog = ({
  user,
  open,
  onClose,
  onConfirm,
  loading,
}: DeleteUserDialogProps) => {
  if (!user) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Supprimer l'utilisateur</DialogTitle>
        </DialogHeader>
        <p>
          Êtes-vous sûr de vouloir supprimer <strong>{user.name}</strong> ?
          Cette action est irréversible.
        </p>
        <DialogFooter className="mt-4">
          <Button variant="outline" onClick={onClose}>
            Annuler
          </Button>
          <Button
            variant="destructive"
            onClick={() => onConfirm(user)}
            disabled={loading}
          >
            {loading ? (
              <div className="flex items-center justify-center">
                <Loader className="animate-spin mr-2" />
                <p>Suppression en cours...</p>
              </div>
            ) : (
              <p>Supprimer</p>
            )}
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
