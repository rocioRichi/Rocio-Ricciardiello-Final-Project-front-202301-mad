import { Suspense, lazy } from "react";
import { Routes } from "react-router-dom";

export function AppRouter() {
  return (
    <Suspense>
      <Routes></Routes>
    </Suspense>
  );
}
export default AppRouter;
