"use client";

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
import { useState, useEffect } from "react";
import axios from "axios";
import { toast } from "sonner";
import { Loader, CheckCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";

const VerifyEmailForm = ({
  className,
  email: initialEmail,
  ...props
}: React.ComponentProps<"div"> & { email?: string }) => {
  const [loading, setLoading] = useState(false);
  const [otp, setOtp] = useState("");
  const [expired, setExpired] = useState(false);
  const [email, setEmail] = useState(initialEmail || "");
  const [codeSent, setCodeSent] = useState(false);
  const [showOtpInput, setShowOtpInput] = useState(!codeSent);

  const navigate = useNavigate();
  const serverUrl = import.meta.env.VITE_SERVER_URL;

  useEffect(() => {
    if (otp.length === 6) {
      handleSubmit();
    }
  }, [otp]);

  if (!serverUrl) {
    toast.error("L'URL du serveur n'est pas configurée.");
    return;
  }

  const handleSubmit = async () => {
    setLoading(true);

    try {
      const response = await axios.post(`${serverUrl}/api/users/verify-email`, {
        code: otp,
      });

      if (response.status === 200) {
        toast.success("Email vérifié avec succès !");
        navigate("/admin/dashboard");
      } else {
        setExpired(true);
      }
    } catch (err: any) {
      if (err.response?.data?.error === "expired") {
        const expiredEmail = err.response.data.email;
        setEmail(expiredEmail);
        setExpired(true);
        setOtp("null");
        toast.error("Le code a expiré. Veuillez en demander un nouveau.");
      } else {
        toast.error(err.response?.data?.message || "Erreur inconnue");
      }
    } finally {
      setLoading(false);
    }
  };

  const requestNewCode = async () => {
    setLoading(true);
    try {
      await axios.post(`${serverUrl}/api/users/request-new-code`, { email });
      toast.success("Un nouveau code a été envoyé à votre adresse email.");
      setCodeSent(true);
      setOtp("");
      setExpired(false);
    } catch (err: any) {
      toast.error(err.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>
            {codeSent ? "Code Envoyé" : "Vérifier Votre Email"}
          </CardTitle>
          <CardDescription>
            {codeSent
              ? `Un nouveau code a été envoyé à ${email}.`
              : "Veuillez coller le code reçu dans votre adresse email"}
          </CardDescription>
        </CardHeader>

        <CardContent className="flex flex-col items-center justify-center gap-4 w-full">
          {codeSent && !showOtpInput ? (
            <div className="flex flex-col items-center gap-2">
              <CheckCircle className="text-green-500 w-12 h-12" />
              <p className="text-sm text-center text-muted-foreground">
                Cliquez ci-dessous pour entrer le nouveau code.
              </p>
            </div>
          ) : (
            <InputOTP maxLength={6} value={otp} onChange={setOtp}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          )}
        </CardContent>

        <CardFooter className="flex flex-col gap-2">
          {codeSent && !showOtpInput ? (
            <Button
              className="w-full"
              variant="outline"
              onClick={() => setShowOtpInput(true)}
            >
              Entrer le nouveau code
            </Button>
          ) : expired ? (
            <Button
              className="w-full"
              onClick={requestNewCode}
              disabled={loading}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <Loader className="animate-spin" />
                  <p className="text-xs">Envoi en cours...</p>
                </div>
              ) : (
                "Demander un nouveau code"
              )}
            </Button>
          ) : (
            <Button
              className="w-full"
              onClick={handleSubmit}
              disabled={loading || otp.length !== 6}
            >
              {loading ? (
                <div className="flex items-center gap-2">
                  <Loader className="animate-spin" />
                  <p className="text-xs">Vérification...</p>
                </div>
              ) : (
                "Vérifier"
              )}
            </Button>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default VerifyEmailForm;
