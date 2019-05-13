export class Employee {
  id: number;
  name: string;
  gender: string;
  email?: string;
  phoneNumber?: string;
  contactPreference: string;
  dateOfBirth: Date = new Date("DD/MM/YYYY");
  department: string;
  isActive: boolean;
  photoPath?: string;
}
