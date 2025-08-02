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
import { Loader } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

export const SignInForm = ({
  className,
  ...props
}: React.ComponentProps<"div">) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const serverUrl = import.meta.env.VITE_SERVER_URL;
    if (!serverUrl) {
      toast.error("L'URL du serveur n'est pas configurée.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(`${serverUrl}/api/users/login-user`, {
        email,
        password,
      });

      setEmail("");
      setPassword("");

      if (response.status === 200) {
        const user = response?.data?.user;
        const userRole = user?.role;
        const userName = user?.name;

        localStorage.setItem("user", JSON.stringify(user));

        toast.success(`Bienvenu ${userName}`);

        // Navigate based on user role
        switch (userRole) {
          case "ADMIN":
            navigate("/admin/dashboard");
            break;
          case "EMPLOYEE":
            navigate("/employee/dashboard");
            break;
          case "MANAGER":
            navigate("/manager/dashboard");
            break;
          default:
            navigate("/dashboard"); // fallback
        }
      }
    } catch (err: any) {
      if (err.response?.data?.error === "not-verified") {
        navigate("/verify-email");
        toast.error(
          "Votre compte n'est pas encore vérifié. Veuillez entrer le code de vérification pour continuer."
        );
      } else {
        toast.error(
          err.response?.data?.message ||
            "Une erreur est survenue lors de la connexion."
        );
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Connecter Vous</CardTitle>
          <CardDescription>
            Vous pouvez vous connecter avec email
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

              <div className="grid gap-2 mb-6">
                <Label htmlFor="password" className="text-xs">
                  Mot de passe
                </Label>
                <Input
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  type="password"
                />
              </div>
            </div>
            <Button type="submit" className="w-full" disabled={loading}>
              {loading ? (
                <div className="flex items-center gap-2">
                  <Loader className="animate-spin" />
                  <p className="text-xs">En cours...</p>
                </div>
              ) : (
                "Connecter vous"
              )}
            </Button>
          </form>
        </CardContent>

        <CardFooter>
          <Link
            to={"/forgot-password"}
            className="text-center hover:underline text-muted-foreground hover:text-foreground"
          >
            Mot de passe oublier
          </Link>
        </CardFooter>
      </Card>
    </div>
  );
};
