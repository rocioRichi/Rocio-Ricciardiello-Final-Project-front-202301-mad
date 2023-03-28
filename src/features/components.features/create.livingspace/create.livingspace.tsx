export {};
// import { SyntheticEvent, useMemo } from "react";
// import { Link } from "react-router-dom";
// import { LivingSpaceStructure } from "../../../models/livingspace";

// import { useLivingSpace } from "../../hooks.features/use.livingspace";
// import { LivingSpaceRepo } from "../../repo.features/livingspace.repo/livingspace.repo";
// import "./create.livingspace.css";

// export default function CreateLivingSpace() {
//   const repo = useMemo(() => new LivingSpaceRepo(), []);
//   const { userLivingSpace } = useLivingSpace(repo);

//   const handleSubmit = (event: SyntheticEvent) => {
//     event.preventDefault();
//     const formData = event.currentTarget as HTMLFormElement;
//     const inputs = formData.querySelectorAll("input");

//     const newLivingSpace: Partial<LivingSpaceStructure> = {
//       livingspace: inputs[0].value,
//     };

//     userLivingSpace(newLivingSpace);
//     formData.reset();
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit} className="createlivingspaceform">
//         <label className="createlivingspace__label">
//           <input
//             type="text"
//             className="createlivingspaceform__input"
//             required
//             name="estancia"
//           />
//           Nombre de la estancia
//         </label>
//         <label className="createlivingspace__label">
//           <input
//             type="password"
//             className="createlivingspaceform__input"
//             required
//           />
//           m2
//         </label>

//         <label className="createlivingspace__label">
//           <input className="enviar" type="submit" value="Crear" />
//         </label>

//         <div className="createlivingspace__gallery__favcontainer">
//           <img
//             src="../../../fav_kitchen/kitchen1.png"
//             height={40}
//             alt="Bombilla con la palabra idea en su interior junto a un corazón"
//           />
//           <img
//             src="../../../fav_kitchen/ktchen3.png"
//             height={40}
//             alt="Bombilla con la palabra idea en su interior junto a un corazón"
//           />
//           <img
//             src="../../../fav_kitchen/kitchen4.png"
//             height={40}
//             alt="Bombilla con la palabra idea en su interior junto a un corazón"
//           />
//         </div>
//       </form>
//       <div>
//         <Link to={"/register"} className="linktoregister">
//           Modificar estancia
//         </Link>
//       </div>
//     </>
//   );
// }
