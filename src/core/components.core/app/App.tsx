import "./App.css";
import { Header } from "../header/header";
import AppRouter from "../approuter/approuter";
import { Footer } from "../footer/footer";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <main>
        <AppRouter></AppRouter>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;
