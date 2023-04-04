import { SyntheticEvent } from "react";
import { useNavigate } from "react-router-dom";
import { LivingSpaceStructure } from "../../../models/livingspace";
import { useLivingSpace } from "../../hooks.features/use.livingspace";
import { LivingSpaceRepo } from "../../repo.features/livingspace.repo/livingspace.repo";
import "./create.livingspace.css";
export function CreateLivingSpace() {
  const repo = new LivingSpaceRepo();
  const { createLivingSpace } = useLivingSpace(repo);
  const navigate = useNavigate();
  const handlercreate = (event: SyntheticEvent) => {
    navigate("/livingspace/gallery");
  };

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formData = event.currentTarget as HTMLFormElement;
    const inputs = formData.querySelectorAll("input");

    const createObject: Partial<LivingSpaceStructure> = {
      livingspace: inputs[0].value,
      m2: +inputs[1].value,

      window: {
        m2: inputs[2].value,
        ref: inputs[3].value,
      },

      floor: {
        m2: inputs[4].value,
        ref: inputs[5].value,
      },

      walls: {
        m2: inputs[6].value,
        ref: inputs[7].value,
      },

      wardrobe: {
        m2: inputs[8].value,
        ref: inputs[9].value,
      },

      door: {
        hand: inputs[10].value as "right" | "left",
        ref: inputs[11].value,
      },
      image: inputs[12].value,
    };
    createLivingSpace(createObject);
    navigate("/livingSpace/gallery");
  };
  return (
    /* m2---0 */
    <>
      <div className="dondestas">
        <button className="gallery__createbutton" onClick={handlercreate}>
          Ver todas las estancias
        </button>
      </div>
      <form onSubmit={handleSubmit} className="createlivingspaceform">
        {/* livingSpace---1 */}
        <label className="createlivingspace__label">
          <input
            type="text"
            className="createlivingspaceform__input"
            required
            name="livingSpace"
          />
          Nombre de la estancia
        </label>
        <label className="createlivingspace__label">
          <input
            type="text"
            className="createlivingspaceform__input"
            required
            name="m2"
          />
          m2
        </label>
        {/* window m2---2 */}
        <fieldset>
          <legend>Ventana</legend>

          <label className="createlivingspace__label">
            <input
              type="text"
              className="createlivingspaceform__input"
              required
              name="m2Ventana"
            />
            m2
          </label>
          {/* window material---3 */}
          <label className="createlivingspace__label">
            <input
              type="text"
              className="createlivingspaceform__input"
              required
              name="materialventana"
            />
            Material
          </label>
        </fieldset>
        {/* Floor m2 ---4 */}
        <fieldset>
          <legend>Suelo</legend>
          <label className="createlivingspace__label">
            <input
              type="text"
              className="createlivingspaceform__input"
              required
              name="floorm2"
            />
            m2
          </label>
          {/* Floor material ---5 */}
          <label className="createlivingspace__label">
            <input
              type="text"
              className="createlivingspaceform__input"
              required
              name="floormaterial"
            />
            Material
          </label>
        </fieldset>
        {/* Walls---6 m2 */}

        <fieldset>
          <legend>Pintura</legend>
          <label className="createlivingspace__label">
            <input
              type="text"
              className="createlivingspaceform__input"
              required
              name="wallsm2"
            />
            m2
          </label>
          {/* Walls color---7 */}
          <label className="createlivingspace__label">
            <input
              type="text"
              className="createlivingspaceform__input"
              required
              name="wallscolor"
            />
            Color
          </label>
        </fieldset>
        {/* Wardrobe m2 ---8 */}

        <fieldset>
          <legend>Armario</legend>
          <label className="createlivingspace__label">
            <input
              type="text"
              className="createlivingspaceform__input"
              required
              name="wardrobem2"
            />
            m. lineales
          </label>
          {/* Wardrobe material ---9 */}
          <label className="createlivingspace__label">
            <input
              type="text"
              className="createlivingspaceform__input"
              required
              name="wardrobematerial"
            />
            Modelo de puerta
          </label>
        </fieldset>
        {/* Door hand ---10 */}
        <fieldset>
          <legend>Puerta</legend>
          <label className="createlivingspace__label">
            <input
              type="text"
              className="createlivingspaceform__input"
              required
              name="doorhand"
            />
            Mano
          </label>
          {/* Door modelo ---11 */}
          <label className="createlivingspace__label">
            <input
              type="text"
              className="createlivingspaceform__input"
              required
              name="doormodelo"
            />
            Modelo de puerta
          </label>
        </fieldset>
        <label className="createlivingspace__label">
          <input
            type="text"
            className="createlivingspaceform__input"
            required
            name="m2"
          />
          Cargar archivo
        </label>
        <input type="submit" className="enviar" value="Crear" />
      </form>
      <label></label>
    </>
  );
}
