import { Route, Routes } from "react-router-dom";
import { CreateLivingSpace } from "../../../features/components.features/create.livingspace/create.livingspace";
// import CreateLivingSpace from "../../../features/components.features/create.livingspace/create.livingspace";
// import CreateLivingSpace from "../../../features/components.features/create.livingspace/create.livingspace";
import { Gallery } from "../../../features/components.features/gallery/gallery";
import Login from "../../../features/components.features/login/login";
import Register from "../../../features/components.features/register.form/register.form";
import { Room } from "../../../features/components.features/room/room";
import { Table } from "../../../features/components.features/table/table";

export function AppRouter() {
  return (
    <Routes>
      <Route path="/" element={<Login />}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
      <Route path="/livingspace/gallery" element={<Gallery></Gallery>}></Route>
      <Route path="/livingspace/room" element={<Room></Room>}></Route>
      <Route path="livingspace/table" element={<Table />}></Route>
      <Route path="livingspace/create" element={<CreateLivingSpace />}></Route>

      {/* <Route
        path="livingspace/createlivingspace"
        element={<CreateLivingSpace />}
      ></Route> */}

      {/* <Route path="/room" element={<Room />}></Route> */}
    </Routes>
  );
}
export default AppRouter;
