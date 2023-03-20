import { Suspense, lazy } from "react";
import { Route, Routes } from "react-router";

const Login = lazy(
  () => import("../../../features/components.features/login/login")
);
const Register = lazy(
  () =>
    import("../../../features/components.features/register.form/register.form")
);

export function AppRouter() {
  return (
    <Suspense>
      <Routes>
        <Route path={"/"} element={<Login></Login>}></Route>
        <Route path={"/login"} element={<Login></Login>}></Route>
        <Route path={"/register"} element={<Register></Register>}></Route>
      </Routes>
    </Suspense>
  );
}
export default AppRouter;
