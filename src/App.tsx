import "./App.css";

function App() {
  return (
    <div className="form">
      <form>
        <label>
          <p>
            <input type="text" name="email" /> Email
          </p>
        </label>
        <label>
          <p>
            <input type="text" name="password" />
            Password
          </p>
        </label>
        <input className="enviar" type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default App;
