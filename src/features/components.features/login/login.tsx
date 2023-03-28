import { SyntheticEvent, useMemo } from "react";
import { Link, useNavigate } from "react-router-dom";
import { LoginStructure } from "../../../models/users";
import { useLivingSpace } from "../../hooks.features/use.livingspace";
// import { useLivingSpace } from "../../hooks.features/use.livingspace";
import { useUsers } from "../../hooks.features/use.users";
import { LivingSpaceRepo } from "../../repo.features/livingspace.repo/livingspace.repo";
// import { LivingSpaceRepo } from "../../repo.features/livingspace.repo/livingspace.repo";
import { UsersRepo } from "../../repo.features/users.repo/users.repo";
import "./login.css";

export default function Login() {
  const repoUser = useMemo(() => new UsersRepo(), []);
  const repoLiving = useMemo(() => new LivingSpaceRepo(), []);

  const { userLogin } = useUsers(repoUser);
  const { gallery } = useLivingSpace(repoLiving);

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
    // gallery();

    formData.reset();
    navigate("/livingspace/gallery");
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

      {/* <table className="roomtable" border={0}>
        <tr className="roomtd">
          <td colSpan={2}>Habitación</td>
        </tr>
        <tr className="roomtd">
          <td>m2 totales</td>
          <td>17</td>
        </tr>
      </table>



      <table border={0}>
        <tr className="roomtd">
          <td rowSpan={2}>Suelo</td>
          <td> m2:</td>
          <td> 17</td>
        </tr>
        <tr className="roomtd">
          <td>Material:</td>
          <td>Madera</td>
        </tr>
      </table>



      <table border={0}>
        <tr className="roomtd">
          <td rowSpan={2}>Armario</td>
          <td> m. lineales:</td>
          <td> 2,5</td>
        </tr>
        <tr className="roomtd">
          <td>Modelo de puerta:</td>
          <td>4V</td>
        </tr>
      </table>



       <table border={0}>
        <tr className="roomtd">
          <td rowSpan={2}>Pintura</td>
          <td> m2:</td>
          <td> 40</td>
        </tr>
        <tr className="roomtd">
          <td>color:</td>
          <td>RAL 7038</td>
        </tr>
      </table>



      <table border={0}>
        <tr className="roomtd">
          <td rowSpan={2}>Ventana</td>
          <td> m2:</td>
          <td> 2,7</td>
        </tr>
        <tr className="roomtd">
          <td>Pvc</td>
        </tr>
      </table>


      <table border={0}>
        <tr className="roomtd">
          <td rowSpan={2}>Ventana</td>
          <td> m2:</td>
          <td> 2,7</td>
        </tr>
        <tr className="roomtd">
          <td>Pvc</td>
        </tr>
      </table>

      <table border={0}>
        <tr className="table__tr">
          <td className="table__td__roomelement" rowSpan={2}>
            Ventana
          </td>
          <td className="table__td__property"> m2:</td>
          <td className="table__td__data"> 2,7</td>
        </tr>
        <tr className="roomtd">
          <td>Material:</td>
          <td>Madera</td>
        </tr>
      </table>   */}
    </>
  );
}
