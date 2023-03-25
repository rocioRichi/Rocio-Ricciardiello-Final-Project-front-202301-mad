import { SyntheticEvent, useMemo } from "react";
import { LivingSpaceStructure } from "../../../models/livingspace";
import { RegisterStructure } from "../../../models/users";
import { useLivingSpace } from "../../hooks.features/use.livingspace";
import { LivingSpaceRepo } from "../../repo.features/livingspace.repo/livingspace.repo";
import "./create.livingspace.css";

export default function CreateLivingSpace() {
  const repo = useMemo(() => new LivingSpaceRepo(), []);
  const { userLivingSpace } = useLivingSpace(repo);

  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    const formData = event.currentTarget as HTMLFormElement;
    const inputs = formData.querySelectorAll("input");

    const newLivingSpace: Partial<LivingSpaceStructure> = {
      livingspace: inputs[0].value,
    };

    userLivingSpace(newLivingSpace);
    formData.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="registerform">
        <label className="registerlabel">
          <input
            type="text"
            className="registerform-input"
            required
            name="email"
          />{" "}
          Email
        </label>
        <label className="registerlabel">
          <input type="password" className="registerform-input" required />{" "}
          Password
        </label>
        <label className="registerlabel">
          <input
            type="text"
            className="registerform-input"
            required
            name="email"
          />{" "}
          Nombre
        </label>

        <label className="registerlabel">
          <input
            type="text"
            className="registerform-input"
            required
            name="email"
          />{" "}
          Apellido
        </label>
        <label className="registerlabel">
          <input
            type="text"
            className="registerform-input"
            required
            name="email"
          />{" "}
          Teléfono
        </label>
        <label className="registerlabel">
          <input className="enviar" type="submit" value="Register" />
        </label>
      </form>
    </>
  );
}
