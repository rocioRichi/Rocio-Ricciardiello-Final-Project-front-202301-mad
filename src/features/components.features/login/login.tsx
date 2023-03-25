import { SyntheticEvent, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginStructure } from "../../../models/users";
import { useUsers } from "../../hooks.features/use.users";
import { UsersRepo } from "../../repo.features/users.repo/users.repo";
import "./login.css";

export default function Login() {
  const repo = useMemo(() => new UsersRepo(), []);
  const { userLogin } = useUsers(repo);
  const navigate = useNavigate();
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
    navigate("/livingspace");
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="loginform">
        <label className="loginlabel">
          <input
            type="text"
            className="loginform-input"
            required
            name="email"
          />{" "}
          Email
        </label>
        <label className="loginlabel">
          <input type="password" className="loginform-input" required />{" "}
          Password
        </label>
        <label className="loginlabel">
          <input type="submit" className="enviar" value="Login" />
        </label>
      </form>
      <div className="registrarsetextcontainer">
        <Link to={"/register"} className="linktoregister">
          Registrarse
        </Link>
      </div>
    </>
  );
}
