import { SyntheticEvent } from "react";
import { LivingSpaceStructure } from "../../../models/livingspace";
import { useLivingSpace } from "../../hooks.features/use.livingspace";
import { LivingSpaceRepo } from "../../repo.features/livingspace.repo/livingspace.repo";

export function FormRoom() {
  const repo = new LivingSpaceRepo();
  const { createLivingSpace } = useLivingSpace(repo);
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formData = event.currentTarget as HTMLFormElement;
    const inputs = formData.querySelectorAll("input");

    const createObject: Partial<LivingSpaceStructure> = {
      m2: +inputs[0].value,
      livingspace: inputs[1].value,

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
    };
    createLivingSpace(createObject);
  };
  return (
    /* m2---0 */

    <form onSubmit={handleSubmit} className="createlivingspaceform">
      <label className="createlivingspace__label">
        <input
          type="text"
          className="createlivingspaceform__input"
          required
          name="m2"
        />
        m2{" "}
      </label>
      {/* livingSpace---1 */}
      <label className="createlivingspace__label">
        <input
          type="text"
          className="createlivingspaceform__input"
          required
          name="livingSpace"
        />
        Estancia
      </label>
      Tipo de estancia
      {/* window m2---2 */}
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
      {/* Floor m2 ---4 */}
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
      {/* Walls---6 m2 */}
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
      {/* Wardrobe m2 ---8 */}
      <label className="createlivingspace__label">
        <input
          type="text"
          className="createlivingspaceform__input"
          required
          name="wardrobem2"
        />
        m2
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
      {/* Door hand ---10 */}
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
      <label>
        <input type="submit" className="enviar" value="Login" />
      </label>
    </form>
  );
}
