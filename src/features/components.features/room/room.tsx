import { SyntheticEvent, useMemo } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { RootState } from "../../../store/store";
import { useLivingSpace } from "../../hooks.features/use.livingspace";
import { LivingSpaceRepo } from "../../repo.features/livingspace.repo/livingspace.repo";
import "./room.css";

export function Room() {
  const repo = useMemo(() => new LivingSpaceRepo(), []);
  const { deleteLivingSpace } = useLivingSpace(repo);
  const navigate = useNavigate();
  const handlercreate = (event: SyntheticEvent) => {
    navigate("/livingspace/gallery");
  };

  const roomDetailArray = useSelector(
    (state: RootState) => state.livingSpaceState.roomDetail
  );
  const handlelink = (event: SyntheticEvent) => {
    const idDelete = roomDetailArray[0].id;
    deleteLivingSpace(idDelete);
    navigate("/livingspace/gallery");
  };

  // const repo = useMemo(() => new LivingSpaceRepo(), []);

  // const { room } = useLivingSpace(repo);

  // useEffect(() => {
  //   room(roomDetailArray[0].id); // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);
  return (
    <>
      {/* kitchen plan */}
      <div className="dondestas">
        <button className="gallery__createbutton" onClick={handlercreate}>
          Ver todas las estancias
        </button>
      </div>
      <div className="room__drawingcontainer">
        <img
          className="room__image"
          src={roomDetailArray[0].image}
          alt="Plano dibujo de una cocina"
        />
      </div>
      {/* pagination & table */}
      <div className="room__drawingandpaginationcontainer">
        {/* leftside pagination */}

        <div className="room__pagination">
          <p>{"<"}</p>
        </div>

        {/* data table */}

        <div className="room__datacontainer">
          {/* Estacia y metros cuadrados */}
          <table border={0}>
            <tr className="roomtable__tr">
              <td className="roomtable__td__roomelement" colSpan={2}>
                {roomDetailArray[0].livingspace}
              </td>
            </tr>
            <tr>
              <td className="roomtable__td__property">m2</td>
              <td className="table__td__data"> {roomDetailArray[0].m2}</td>
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
              <td className="table__td__data">
                {" "}
                {roomDetailArray[0].floor?.m2}
              </td>
            </tr>
            <tr className="roomtd">
              <td className="roomtable__td__property">Material:</td>
              <td className="table__td__data">
                {" "}
                {roomDetailArray[0].floor?.ref}
              </td>
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
              <td className="table__td__data">
                {roomDetailArray[0].wardrobe?.m2}
              </td>
            </tr>
            <tr className="roomtd">
              <td className="roomtable__td__propertyy">Modelo de puerta:</td>
              <td className="table__td__data">
                {roomDetailArray[0].wardrobe?.m2}
              </td>
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
              <td className="table__td__data">
                {roomDetailArray[0].walls?.m2}
              </td>
            </tr>
            <tr className="roomtd">
              <td className="roomtable__td__property">Color:</td>
              <td className="table__td__data">
                {" "}
                {roomDetailArray[0].walls?.ref}
              </td>
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
              <td className="table__td__data">
                {" "}
                {roomDetailArray[0].door?.hand}
              </td>
            </tr>
            <tr className="roomtd">
              <td className="roomtable__td__property">Modelo:</td>
              <td className="table__td__data">
                {roomDetailArray[0].door?.ref}
              </td>
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
              <td className="table__td__data">
                {roomDetailArray[0].window?.m2}
              </td>
            </tr>
            <tr className="roomtd">
              <td className="roomtable__td__property">Material:</td>
              <td className="table__td__data">
                {roomDetailArray[0].window?.ref}
              </td>
            </tr>
          </table>
        </div>

        {/* right side pagination */}

        <div className="room__pagination">
          <p>{">"}</p>
        </div>
      </div>
      <img src="../../../../papelera.png" onClick={handlelink} alt="" />
      <p>Eliminar estancia</p>
      {/* lightbulb */}
      <div className="room__lightbulbdrawing">
        <img
          src="../../../bombilla.png"
          alt="Bombilla con la palabra idea en su interior junto a un corazón"
        />
      </div>

      {/* load picture button   */}

      <form className="room__loadimage">
        <label className="room__fileselect" id="room__srcfile2">
          <input type="file" name="src-file2" aria-label="Archivo" />
        </label>
        <label className="room__fileselect" id="room__srcfile1">
          <input type="file" name="src-file1" aria-label="Archivo" />
        </label>
      </form>

      {/* final gallery  */}

      <div className="room__gallery__favcontainer">
        <img
          src="../../../fav_kitchen/kitchen1.png"
          height={40}
          alt="Bombilla con la palabra idea en su interior junto a un corazón"
        />
        <img
          src="../../../fav_kitchen/ktchen3.png"
          height={40}
          alt="Bombilla con la palabra idea en su interior junto a un corazón"
        />
        <img
          src="../../../fav_kitchen/kitchen4.png"
          height={40}
          alt="Bombilla con la palabra idea en su interior junto a un corazón"
        />
      </div>
    </>
  );
}
