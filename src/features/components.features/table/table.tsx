import "./table.css";
export function Table() {
  return (
    <>
      <table border={1}>
        <tr className="table__tr">
          <td className="table__td__roomelement" rowSpan={3}>
            Ventana
          </td>
        </tr>
        <tr>
          <td className="table__td__property"> m2:</td>
          <td className="table__td__data"> 2,7</td>
        </tr>
        <tr className="roomtd">
          <td className="table__td__property">Material:</td>
          <td className="table__td__data">Madera</td>
        </tr>
      </table>
    </>
  );
}
