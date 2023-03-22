import { SyntheticEvent, useMemo } from "react";
import { RegisterStructure } from "../../../models/users";
import { useUsers } from "../../hooks.features/use.users";
import { UsersRepo } from "../../repo.features/users.repo";
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
    <form onSubmit={handleSubmit} className="formregister">
      <label>
        <p>
          <input type="text" name="email" /> Email
        </p>
      </label>
      <label>
        <p>
          <input type="text" name="firstname" /> Nombre
        </p>
      </label>
      <label>
        <p>
          <input type="text" name="lastname" /> Apellidos
        </p>
      </label>
      <label>
        <p>
          <input type="text" name="telephone" /> Teléfono
        </p>
      </label>
      <input type="password" required /> Password
      <p className="sendbotton">
        <input className="enviar" type="submit" value="Registrarse" />
      </p>
    </form>
  );
}
