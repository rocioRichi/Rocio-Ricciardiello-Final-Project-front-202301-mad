import "./App.css";

function App() {
  return (
    <>
      <img src="../../../pageslogo.png" alt="logo" />

      <div className="form">
        <form>
          <label>
            <p>
              <input type="text" name="email" /> Email
            </p>
          </label>
          <div className="wrapper">
            <input type="password" required /> Password
            <span className="mostrar-btn">
              <i className="fas fa-eye"></i>
            </span>
          </div>
          <p className="sendbotton">
            {" "}
            <input className="enviar" type="submit" value="Iniciar sesión" />
          </p>
        </form>
      </div>
      <div className="registrarsetextcontainer">Registrarse</div>
    </>
  );
}

export default App;
