export {};
// import { SyntheticEvent, useMemo } from "react";
// import { RegisterStructure } from "../../../models/users";
// import { useUsers } from "../../hooks.features/use.users";
// import { LivingSpaceRepo } from "../../repo.features/livingspace.repo/livingspace.repo";
// import "./register.form.css";

// export default function Modify() {
//   const repo = useMemo(() => new LivingSpaceRepo(), []);
//   const { userRegister } = useUsers(repo);

//   const handleSubmit = (event: SyntheticEvent) => {
//     event.preventDefault();
//     const formData = event.currentTarget as HTMLFormElement;
//     const inputs = formData.querySelectorAll("input");

//     const modify: Partial<RegisterStructure> = {
//       email: inputs[0].value,
//       passwd: inputs[1].value,
//       firstName: inputs[2].value,
//       lastName: inputs[3].value,
//       telephone: inputs[4].value,
//     };

//     userRegister(newUser);

//     formData.reset();
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit} className="registerform">
//         <label className="registerlabel">
//           <p>Floor</p>
//           <input
//             type="text"
//             className="registerform-input"
//             required
//             name="email"
//           />
//           window
//         </label>
//         <label className="registerlabel">
//           <input type="password" className="registerform-input" required />{" "}
//           Password
//         </label>
//         <label className="registerlabel">
//           <input
//             type="text"
//             className="registerform-input"
//             required
//             name="email"
//           />{" "}
//           Nombre
//         </label>

//         <label className="registerlabel">
//           <input
//             type="text"
//             className="registerform-input"
//             required
//             name="email"
//           />{" "}
//           Apellido
//         </label>
//         <label className="registerlabel">
//           <input
//             type="text"
//             className="registerform-input"
//             required
//             name="email"
//           />{" "}
//           Teléfono
//         </label>
//         <label className="registerlabel">
//           <input className="enviar" type="submit" value="Register" />
//         </label>
//       </form>
//     </>
//   );
// }
