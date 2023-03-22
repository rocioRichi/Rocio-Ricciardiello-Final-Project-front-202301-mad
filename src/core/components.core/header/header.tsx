import { useSelector } from "react-redux";
import { RootState } from "../../../store/store";
import "./header.css";
export function Header() {
  const initials = useSelector(
    (state: RootState) => state.users.userLogged.firstName
  );

  return (
    <>
      <header className="header">
        <img src="../../../pageslogo.png" alt="logo" />
        <p>{initials}</p>
      </header>
    </>
  );
}
