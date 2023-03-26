import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { RootState } from "../../../store/store";
import "./header.css";
export function Header() {
  const initials = useSelector(
    (state: RootState) => state.users.userLogged.firstName
  );

  return (
    <>
      <header className="header">
        <Link to={"/login"} className="linktoregister">
          <img src="../../../pageslogo.svg" alt="logo" />
        </Link>

        <p className="saludo">{initials}</p>
      </header>
    </>
  );
}
