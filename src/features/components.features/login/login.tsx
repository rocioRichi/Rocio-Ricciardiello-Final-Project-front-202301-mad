import { SyntheticEvent, useMemo } from "react";
import { LoginStructure } from "../../../models/users";
import { useUsers } from "../../hooks.features/use.users";
import { UsersRepo } from "../../repo.features/users.repo/users.repo";
import "./login.css";

export default function Login() {
  const repo = useMemo(() => new UsersRepo(), []);
  const { userLogin } = useUsers(repo);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formData = event.currentTarget as HTMLFormElement;
    const inputs = formData.querySelectorAll("input");

    const loginInfo: LoginStructure = {
      email: inputs[0].value,
      passwd: inputs[1].value,
    };

    userLogin(loginInfo);

    formData.reset();
  };

  return (
    <>
      <img src="../../../pageslogo.png" alt="logo" />

      <div className="form">
        <form onSubmit={handleSubmit}>
          <label>
            <p>
              <input type="text" name="email" /> Email
            </p>
          </label>
          <div className="wrapper">
            <input type="password" required /> Password
          </div>
          <p className="sendbotton">
            <input className="enviar" type="submit" value="Iniciar sesión" />
          </p>
        </form>
      </div>
      <div className="registrarsetextcontainer">Registrarse</div>
    </>
  );
}
