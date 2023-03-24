import { SyntheticEvent, useMemo } from "react";
import { RegisterStructure } from "../../../models/users";
import { useUsers } from "../../hooks.features/use.users";
import { UsersRepo } from "../../repo.features/users.repo/users.repo";
import "./register.form.css";

export default function Register() {
  const repo = useMemo(() => new UsersRepo(), []);
  const { userRegister } = useUsers(repo);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formData = event.currentTarget as HTMLFormElement;
    const inputs = formData.querySelectorAll("input");

    const newUser: RegisterStructure = {
      email: inputs[0].value,
      passwd: inputs[1].value,
      firstName: inputs[2].value,
      lastName: inputs[3].value,
      telephone: inputs[4].value,
    };

    userRegister(newUser);

    formData.reset();
  };
  return (
    <form onSubmit={handleSubmit} className="form">
      <p>
        <input type="text" required name="email" /> Email
      </p>
      <p>
        <input type="password" required /> Password
      </p>
      <p>
        <input type="text" required name="email" /> Nombre
      </p>
      <p>
        <input type="text" required name="email" /> Apellido
      </p>
      <p>
        <input type="text" required name="email" /> Teléfono
      </p>
      <p className="sendbotton">
        <input className="enviar" type="submit" value="Registrarse" />
      </p>
    </form>
  );
}
