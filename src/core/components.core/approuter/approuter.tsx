import { Route, Routes } from "react-router-dom";
import { Gallery } from "../../../features/components.features/gallery/gallery";
import Login from "../../../features/components.features/login/login";
import Register from "../../../features/components.features/register.form/register.form";
// import { Room } from "../../../features/components.features/room/room";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/livingspace" element={<Gallery />}></Route>
      {/* <Route path="/room" element={<Room />}></Route> */}
    </Routes>
  );
}
export default AppRouter;
