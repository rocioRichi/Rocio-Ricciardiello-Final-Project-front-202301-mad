import { SyntheticEvent, useMemo } from "react";
import { useSelector } from "react-redux";
import { useLivingSpace } from "../../hooks.features/use.livingspace";
import { LivingSpaceStateStructure } from "../../reducers.features/livingspace.slice";
import { LivingSpaceRepo } from "../../repo.features/livingspace.repo/livingspace.repo";

export function Gallery() {
  const repo = useMemo(() => new LivingSpaceRepo(), []);
  const { gallery } = useLivingSpace(repo);
  // const galleryArray = useSelector(
  //   (state: LivingSpaceStateStructure) => state.galleryState
  // );

  const handleSubmit = (event: SyntheticEvent) => {
    gallery();
  };
  return (
    <>
      <button onClick={handleSubmit}>Get Gallery</button>
      <p>Hola soy la gallery</p>
      {/* <p>{galleryArray[0].livingspace}</p> */}
    </>
  );
}
