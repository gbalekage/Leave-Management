import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { CheckCircle, Loader } from "lucide-react";
import { useNavigate, useParams } from "react-router-dom";

const ResetPasswordForm = ({
  className,
  email: initialEmail,
  ...props
}: React.ComponentProps<"div"> & { email?: string }) => {
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  const [loading, setLoading] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const [expired, setExpired] = useState(false);
  const [email, setEmail] = useState(initialEmail || "");
  const { token } = useParams();
  const navigate = useNavigate();
  const serverUrl = import.meta.env.VITE_SERVER_URL;

  if (!serverUrl) {
    toast.error("L'URL du serveur n'est pas configurée.");
    return null;
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await axios.post(
        `${serverUrl}/api/users/reset-password/${token}`,
        { password, password2 }
      );

      if (response.status === 200) {
        toast.success("Mot de passe modifié avec succès !");
        navigate("/");
      }
    } catch (err: any) {
      if (err.response?.data?.error === "expired") {
        const expiredEmail = err.response.data.email;
        setEmail(expiredEmail);
        setExpired(true);
        toast.error("Le lien a expiré. Veuillez en demander un nouveau.");
      } else {
        toast.error(err.response?.data?.message || "Une erreur est survenue.");
      }
    } finally {
      setLoading(false);
    }
  };

  const requestNewToken = async () => {
    setLoading(true);
    try {
      await axios.post(`${serverUrl}/api/users/forgot-password`, { email });
      setSuccessMessage(
        "Un nouveau lien de réinitialisation a été envoyé à votre adresse email."
      );
      setExpired(false); // hide the reset UI
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Erreur lors de l’envoi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Modifier le mot de passe</CardTitle>
          <CardDescription>
            {expired
              ? "Votre lien a expiré. Demandez un nouveau lien ci-dessous."
              : successMessage
              ? ""
              : "Entrez votre nouveau mot de passe."}
          </CardDescription>
        </CardHeader>
        <CardContent>
          {successMessage ? (
            <div className="flex flex-col items-center gap-2 text-center">
              <CheckCircle className="text-green-500 w-10 h-10" />
              <p className="text-sm text-green-600">{successMessage}</p>
              <p className="text-xs text-muted-foreground">
                Veuillez vérifier votre email pour continuer.
              </p>
            </div>
          ) : expired ? (
            <>
              <p className="text-sm text-muted-foreground mb-4">
                Adresse email détectée :{" "}
                <span className="font-medium">{email}</span>
              </p>
              <Button
                className="w-full"
                onClick={requestNewToken}
                disabled={loading}
              >
                {loading ? (
                  <div className="flex items-center gap-2">
                    <Loader className="animate-spin" />
                    <p className="text-xs">Envoi en cours...</p>
                  </div>
                ) : (
                  "Demander un nouveau lien"
                )}
              </Button>
            </>
          ) : (
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4">
                <div className="grid gap-2">
                  <Label htmlFor="password" className="text-xs">
                    Nouveau mot de passe
                  </Label>
                  <Input
                    name="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    required
                  />
                </div>
                <div className="grid gap-2">
                  <Label htmlFor="password2" className="text-xs">
                    Confirmer le mot de passe
                  </Label>
                  <Input
                    name="password2"
                    value={password2}
                    onChange={(e) => setPassword2(e.target.value)}
                    type="password"
                    required
                  />
                </div>
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <Loader className="animate-spin" />
                      <p className="text-xs">En cours...</p>
                    </div>
                  ) : (
                    "Modifier"
                  )}
                </Button>
              </div>
            </form>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default ResetPasswordForm;
