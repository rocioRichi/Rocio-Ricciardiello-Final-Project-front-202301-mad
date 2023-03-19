export interface RegisterStructure extends LoginStructure {
  id?: string;
  firstName: string;
  lastName: string;
  telephone: string;
}
export interface LoginStructure {
  email: string;
  passwd: string;
}
