import { Label } from "./ui/label";
import { Input } from "./ui/input";

const ProfileForm = ({ user }: { user: any }) => {
  return (
    <div className="space-y-4">
      <div>
        <Label htmlFor="name">Nom</Label>
        <Input
          id="name"
          type="text"
          value={user?.name || ""}
          readOnly
          className="mt-2"
        />
      </div>

      <div>
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          type="email"
          value={user?.email || ""}
          readOnly
          className="mt-2"
        />
      </div>
    </div>
  );
};

export default ProfileForm;
