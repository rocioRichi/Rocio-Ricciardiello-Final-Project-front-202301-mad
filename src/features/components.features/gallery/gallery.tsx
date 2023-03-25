import { SyntheticEvent, useMemo } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LivingSpaceStructure } from "../../../models/livingspace";
import { RootState } from "../../../store/store";
import { useLivingSpace } from "../../hooks.features/use.livingspace";
import { LivingSpaceStateStructure } from "../../reducers.features/livingspace.slice";
import { LivingSpaceRepo } from "../../repo.features/livingspace.repo/livingspace.repo";

export function Gallery() {
  const repo = useMemo(() => new LivingSpaceRepo(), []);
  const { gallery } = useLivingSpace(repo);

  const handleSubmit = (event: SyntheticEvent) => {
    gallery();
  };
  const galleryArray = useSelector(
    (state: RootState) => state.livingSpaceState.galleryState
  );

  return (
    <>
      <button onClick={handleSubmit}>Get Gallery</button>

      {/* <p>{galleryArray[0].m2}</p> */}
      <ul className="homepage__list">
        {galleryArray.map((item: Partial<LivingSpaceStructure>) => (
          <p>{item.livingspace}</p>
          // <Card key={item.id} product={item}></Card>
        ))}
      </ul>
    </>
  );
}
