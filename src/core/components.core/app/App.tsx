import "./App.css";
import { Header } from "../header/header";
import Register from "../../../features/components.features/register.form/register.form";
import Login from "../../../features/components.features/login/login";
import { Footer } from "../footer/footer";
import { Gallery } from "../../../features/components.features/gallery/gallery";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Register />
      <Login></Login>
      <Gallery></Gallery>
      <Footer></Footer>
    </div>
  );
}

export default App;
