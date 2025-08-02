import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "sonner";
import { CheckCircle, Loader } from "lucide-react";
import { Link } from "react-router-dom";

const ForgotPasswordForm = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [sentEmail, setSentEmail] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const serverUrl = import.meta.env.VITE_SERVER_URL;
    if (!serverUrl) {
      toast.error("L'URL du serveur n'est pas configurée.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${serverUrl}/api/users/forgot-password`,
        {
          email,
        }
      );
      setEmail("");

      if (response.status === 200) {
        setSentEmail(email);
        setSuccess(true);
        setEmail("");
      }
    } catch (err: any) {
      toast.error(err.response?.data?.message || "Une erreur est survenue.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      {success ? (
        <div className="flex flex-col items-center justify-center gap-4 py-6">
          <CheckCircle className="text-green-600 w-10 h-10" />
          <p className="text-center text-sm text-muted-foreground">
            Un e-mail a été envoyé à <strong>{sentEmail}</strong>. <br />
            <br />
            Veuillez vérifier votre boîte de réception pour réinitialiser votre
            mot de passe.
          </p>
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Mot de passe oublier</CardTitle>
            <CardDescription>
              Vieller saisir votre mail pour modifier votre mot de passe
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-6">
                <div className="grid gap-2">
                  <Label htmlFor="email" className="text-xs">
                    Adresse e-mail
                  </Label>
                  <Input
                    name="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="exemple@mail.com"
                  />
                </div>

                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? (
                    <div className="flex items-center gap-2">
                      <Loader className="animate-spin" />
                      <p className="text-xs">En cours...</p>
                    </div>
                  ) : (
                    "Envoyer"
                  )}
                </Button>
              </div>
            </form>
          </CardContent>
          <CardFooter>
            <Link
              to={"/"}
              className="grid place-items-center hover:underline text-muted-foreground hover:text-foreground"
            >
              Annuler
            </Link>
          </CardFooter>
        </Card>
      )}
    </div>
  );
};

export default ForgotPasswordForm;
