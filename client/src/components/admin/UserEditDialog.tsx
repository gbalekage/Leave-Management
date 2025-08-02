"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import type { User } from "@/types/user";
import { Loader } from "lucide-react";

interface Props {
  open: boolean;
  user: User | null;
  onClose: () => void;
  onSave: (updatedUser: User) => void;
  loading: boolean;
}

export const UserEditDialog = ({
  open,
  user,
  onClose,
  onSave,
  loading,
}: Props) => {
  const [formData, setFormData] = useState<User | null>(null);

  useEffect(() => {
    if (user) setFormData(user);
  }, [user]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    if (!formData) return;
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (formData) onSave(formData);
    onClose();
  };

  if (!formData) return null;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle>Modifier l'utilisateur</DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <Input
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Nom"
          />
          <Input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
          />
          <select
            id="role"
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full h-10 rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50"
          >
            <option value="">Sélectionnez un rôle</option>
            <option value="ADMIN">Administrateur</option>
            <option value="MANAGER">Manager</option>
            <option value="EMPLOYEE">Employé</option>
          </select>

          <div className="flex justify-end gap-2">
            <Button variant="outline" onClick={onClose}>
              Annuler
            </Button>
            <Button onClick={handleSubmit}>
              {loading ? (
                <div className="flex items-center justify-center">
                  <Loader className="animate-spin mr-2" />
                  <p>Enregistrement en cours...</p>
                </div>
              ) : (
                <p>Enregistrer</p>
              )}
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
