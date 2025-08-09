import * as React from "react";
import { GalleryVerticalEnd, Users, Activity } from "lucide-react";

import { NavMain } from "@/components/nav-main";
import { NavUser } from "@/components/nav-user";
import { TeamSwitcher } from "@/components/team-switcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@/components/ui/sidebar";
import { UserContext } from "@/context/user";

// This is sample data.
const data = {
  teams: [
    {
      name: "Gestion congé",
      logo: GalleryVerticalEnd,
      plan: "conge@gestion.com",
    },
  ],
  navMain: [
    {
      title: "Utilisateurs",
      url: "#",
      icon: Users,
      isActive: true,
      items: [
        {
          title: "Tout les utilisateurs",
          url: "/admin/dashboard/all-users",
        },
        {
          title: "Ajouter un Utilisateur",
          url: "/admin/dashboard/sign-up",
        },
      ],
    },

    {
      title: "Congés",
      url: "#",
      icon: Activity,
      isActive: true,
      items: [
        {
          title: "Toutes les congés",
          url: "/admin/dashboard/all-leaves",
        },
        {
          title: "Agent en conge",
          url: "/admin/dashboard/aprouved-leaves",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const { user } = React.useContext(UserContext);
  return (
    <Sidebar collapsible="icon" {...props}>
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>{user && <NavUser user={user} />}</SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
