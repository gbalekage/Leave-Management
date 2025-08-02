export type User = {
  id: number;
  name: string;
  email: string;
  matricule: string;
  role: string;
  isVerified: boolean;
  lastLogin: string | null;
};

export type Leave = {
  id: string;
  type: string;
  startDate: string;
  endDate: string;
  reason: string;
  status: string;
  user?: {
    name: string;
    role: string;
    email: string;
  };
  createdAt?: string;
  updatedAt?: string;
};
