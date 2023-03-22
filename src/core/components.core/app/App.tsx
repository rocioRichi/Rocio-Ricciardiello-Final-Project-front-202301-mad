import "./App.css";

import Register from "../../../features/components.features/register.form/register.form";
import Login from "../../../features/components.features/login/login";
import { Header } from "../header/header";
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Register />
      <Login></Login>
    </div>
  );
}

export default App;
