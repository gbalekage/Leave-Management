import { useContext, useEffect, useState } from "react";
import { UserContext } from "@/context/user";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import axios from "axios";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { format } from "date-fns";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import type { Leave } from "@/types/user";
import { toast } from "sonner";
import { Loader } from "lucide-react";
import ProfileForm from "@/components/ProfileForm";

const EmployeeDashboard = () => {
  const { user } = useContext(UserContext);
  const [leaves, setLeaves] = useState<Leave[]>([]);
  const [summary, setSummary] = useState({
    approved: 0,
    pending: 0,
    rejected: 0,
  });

  const [modalOpen, setModalOpen] = useState(false);
  const [form, setForm] = useState({
    type: "",
    startDate: "",
    duration: "",
    endDate: "",
    reason: "",
  });
  const [loading, setLoading] = useState(false);

  const userId = user?.id;
  const serverUrl = import.meta.env.VITE_SERVER_URL;

  const fetchLeaves = async () => {
    try {
      if (!userId) return;
      const res = await axios.get(`${serverUrl}/api/leaves/me/${userId}`);
      const data: Leave[] = res.data.leaves;

      setLeaves(data);

      const approved = data.filter((l) => l.status === "APPROVED").length;
      const pending = data.filter((l) => l.status === "PENDING").length;
      const rejected = data.filter((l) => l.status === "REJECTED").length;

      setSummary({ approved, pending, rejected });
    } catch (err) {
      console.error("Erreur chargement congés:", err);
    }
  };

  useEffect(() => {
    fetchLeaves();
  }, [userId]);

  const chartData = [
    { name: "Approuvées", value: summary.approved },
    { name: "En attente", value: summary.pending },
    { name: "Refusées", value: summary.rejected },
  ];

  const calculateDuration = (start: string, end: string) => {
    const startDate = new Date(start);
    const endDate = new Date(end);

    if (isNaN(startDate.getTime()) || isNaN(endDate.getTime())) return "";

    const timeDiff = endDate.getTime() - startDate.getTime();
    const dayCount = Math.floor(timeDiff / (1000 * 60 * 60 * 24)) + 1;

    return dayCount > 0 ? dayCount.toString() : "";
  };

  const handleChange =
    (field: string) =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = e.target.value;

      setForm((prev) => {
        const updatedForm = { ...prev, [field]: value };

        if (field === "startDate" || field === "endDate") {
          const duration = calculateDuration(
            field === "startDate" ? value : prev.startDate,
            field === "endDate" ? value : prev.endDate
          );
          updatedForm.duration = duration;
        }

        return updatedForm;
      });
    };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (
      !form.type ||
      !form.startDate ||
      !form.endDate ||
      !form.reason ||
      !form.duration
    ) {
      toast.error("Veuillez remplir tous les champs.");
      return;
    }

    if (isNaN(Date.parse(form.startDate)) || isNaN(Date.parse(form.endDate))) {
      toast.error("Les dates saisies ne sont pas valides.");
      return;
    }

    if (new Date(form.endDate) < new Date(form.startDate)) {
      toast.error("La date de fin doit être après la date de début.");
      return;
    }

    const startDateISO = new Date(form.startDate).toISOString();
    const endDateISO = new Date(form.endDate).toISOString();
    const durationInt = parseInt(form.duration, 10);

    if (isNaN(durationInt) || durationInt < 1) {
      toast.error("La durée doit être un nombre valide supérieur à 0.");
      return;
    }

    setLoading(true);
    try {
      const response = await axios.post(
        `${serverUrl}/api/leaves/create-leave/${userId}`,
        {
          ...form,
          startDate: startDateISO,
          endDate: endDateISO,
          duration: durationInt, // ✅ Send as integer
        }
      );

      setModalOpen(false);
      setForm({
        type: "",
        startDate: "",
        endDate: "",
        reason: "",
        duration: "",
      });
      fetchLeaves();
      console.log("Leave Response:", response.data);
    } catch (err: any) {
      toast.error(
        err.response?.data?.message || "Erreur lors de l'envoi de la demande."
      );
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-semibold">Bonjour, {user?.name}</h1>
          <p className="text-muted-foreground">Voici un aperçu de vos congés</p>
        </div>

        <div className="flex items-center gap-2">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline">Profil</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Mon profil</DialogTitle>
                <DialogDescription>
                  Voici vos informations personnelles.
                </DialogDescription>
              </DialogHeader>
              <ProfileForm user={user} />
            </DialogContent>
          </Dialog>

          <Button
            variant="destructive"
            onClick={() => {
              localStorage.clear();
              window.location.href = "/";
            }}
          >
            Déconnexion
          </Button>
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {[
          {
            title: "Approuvées",
            count: summary.approved,
            color: "text-green-600",
          },
          {
            title: "En attente",
            count: summary.pending,
            color: "text-yellow-600",
          },
          {
            title: "Refusées",
            count: summary.rejected,
            color: "text-red-600",
          },
        ].map((item, i) => (
          <Card key={i}>
            <CardHeader>
              <CardDescription>{item.title}</CardDescription>
              <CardTitle className={`${item.color} text-2xl`}>
                {item.count}
              </CardTitle>
            </CardHeader>
          </Card>
        ))}
      </div>

      <Card>
        <CardHeader>
          <CardTitle>Historique de congés</CardTitle>
          <CardDescription>Visualisez vos congés par statut</CardDescription>
        </CardHeader>
        <CardFooter>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="value" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </CardFooter>
      </Card>

      <Card>
        <CardHeader className="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Demandes récentes</CardTitle>
            <CardDescription>Vos 5 dernières demandes de congé</CardDescription>
          </div>
          <Dialog open={modalOpen} onOpenChange={setModalOpen}>
            <DialogTrigger asChild>
              <Button>Faire une demande</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-lg">
              <DialogHeader>
                <DialogTitle>Nouvelle demande de congé</DialogTitle>
                <DialogDescription>
                  Remplissez le formulaire ci-dessous pour faire une nouvelle
                  demande.
                </DialogDescription>
              </DialogHeader>

              <form onSubmit={handleSubmit} className="space-y-4 mt-2">
                <div>
                  <Label htmlFor="type">Type de congé</Label>
                  <Select
                    value={form.type}
                    onValueChange={(value) =>
                      setForm((prev) => ({ ...prev, type: value }))
                    }
                  >
                    <SelectTrigger id="type" className="w-full">
                      <SelectValue placeholder="Choisissez un type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="ANNUAL">Congé payé</SelectItem>
                      <SelectItem value="SICK">Congé maladie</SelectItem>
                      <SelectItem value="MATERNITY">Congé maternité</SelectItem>
                      <SelectItem value="PATERNITY">Congé paternité</SelectItem>
                      <SelectItem value="UNPAID">Congé sans solde</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="startDate">Date de début</Label>
                  <Input
                    type="date"
                    id="startDate"
                    value={form.startDate}
                    onChange={handleChange("startDate")}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="endDate">Date de fin</Label>
                  <Input
                    type="date"
                    id="endDate"
                    value={form.endDate}
                    onChange={handleChange("endDate")}
                    className="mt-2"
                  />
                </div>

                <div>
                  <Label htmlFor="duration">Durée (en jours)</Label>
                  <Input
                    type="number"
                    id="duration"
                    value={form.duration}
                    onChange={handleChange("duration")}
                    className="mt-2"
                    min={1}
                    readOnly
                    disabled
                  />
                </div>

                <div>
                  <Label htmlFor="reason">Motif</Label>
                  <Textarea
                    id="reason"
                    rows={3}
                    value={form.reason}
                    onChange={handleChange("reason")}
                    className="mt-2"
                  />
                </div>

                <DialogFooter>
                  <Button type="submit" disabled={loading}>
                    {loading ? (
                      <div className="flex gap-2">
                        <Loader className="animate-spin" />
                        <p>Demande en cours...</p>
                      </div>
                    ) : (
                      "Envoyer la demande"
                    )}
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </CardHeader>

        <CardFooter>
          {leaves.length === 0 ? (
            <p className="text-muted-foreground">Aucune demande enregistrée</p>
          ) : (
            <ul className="w-full space-y-2">
              {leaves.slice(0, 5).map((leave, index) => (
                <li
                  key={index}
                  className="flex justify-between items-center text-sm border-b pb-2"
                >
                  <div>
                    <p className="font-medium">
                      {leave.type} —{" "}
                      {format(new Date(leave.startDate), "dd MMM")} au{" "}
                      {format(new Date(leave.endDate), "dd MMM yyyy")}
                    </p>
                    <p className="text-muted-foreground">{leave.reason}</p>
                  </div>
                  <Badge
                    variant="outline"
                    className={
                      leave.status === "APPROVED"
                        ? "border-green-500 text-green-600"
                        : leave.status === "PENDING"
                        ? "border-yellow-500 text-yellow-600"
                        : "border-red-500 text-red-600"
                    }
                  >
                    {leave.status}
                  </Badge>
                </li>
              ))}
            </ul>
          )}
        </CardFooter>
      </Card>
    </div>
  );
};

export default EmployeeDashboard;
