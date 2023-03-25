import "./room.css";
export function Room() {
  return (
    <div className="room__drawinganddatecontainer">
      <div className="room__drawingandloadimagecontainer">
        <img
          src="../../../planos/kitchenview.jpg"
          alt="Plano dibujo de una cocina"
        />
        <form className="room__aploadimageform">
          <label>
            Picture
            <input type="file" name="picture" />
          </label>

          <button className="room__buttonform" type="submit">
            Subir
          </button>
        </form>
      </div>
      <div className="room__datacontainer">
        {/* Estacia y metros cuadrados */}
        <table border={0}>
          <tr className="roomtable__tr">
            <td className="roomtable__td__roomelement" colSpan={2}>
              Cocina
            </td>
          </tr>
          <tr>
            <td className="roomtable__td__property"> m2:</td>
            <td className="table__td__data"> 14</td>
          </tr>
        </table>

        {/* Suelo */}

        <table border={0}>
          <tr className="table__tr">
            <td className="roomtable__td__roomelement" colSpan={2}>
              Suelo
            </td>
          </tr>
          <tr>
            <td className="roomtable__td__property"> m2:</td>
            <td className="table__td__data"> 16</td>
          </tr>
          <tr className="roomtd">
            <td className="roomtable__td__property">Material:</td>
            <td className="table__td__data">Porcelánico</td>
          </tr>
        </table>

        {/* Armario */}

        <table border={0}>
          <tr className="table__tr">
            <td className="roomtable__td__roomelement" colSpan={2}>
              Armario
            </td>
          </tr>
          <tr>
            <td className="roomtable__td__property"> m. lineales:</td>
            <td className="table__td__data"> 2</td>
          </tr>
          <tr className="roomtd">
            <td className="roomtable__td__propertyy">Modelo de puerta:</td>
            <td className="table__td__data">4V</td>
          </tr>
        </table>

        {/* Pintura */}

        <table border={0}>
          <tr className="table__tr">
            <td className="roomtable__td__roomelement" colSpan={2}>
              Pintura
            </td>
          </tr>
          <tr>
            <td className="roomtable__td__property"> m2:</td>
            <td className="table__td__data">38</td>
          </tr>
          <tr className="roomtd">
            <td className="roomtable__td__property">Color:</td>
            <td className="table__td__data">Ral 1001</td>
          </tr>
        </table>

        {/* Puerta */}

        <table border={0}>
          <tr className="table__tr">
            <td className="roomtable__td__roomelement" colSpan={2}>
              Puerta
            </td>
          </tr>
          <tr>
            <td className="roomtable__td__property"> Mano</td>
            <td className="table__td__data">Derecha</td>
          </tr>
          <tr className="roomtd">
            <td className="roomtable__td__property">Modelo:</td>
            <td className="table__td__data">4V</td>
          </tr>
        </table>
        {/* window */}
        <table border={0}>
          <tr className="table__tr">
            <td className="roomtable__td__roomelement" colSpan={2}>
              Ventana
            </td>
          </tr>
          <tr>
            <td className="roomtable__td__property"> m2</td>
            <td className="table__td__data">1,8</td>
          </tr>
          <tr className="roomtd">
            <td className="roomtable__td__property">Material:</td>
            <td className="table__td__data">Pvc</td>
          </tr>
        </table>
      </div>
    </div>
  );
}
