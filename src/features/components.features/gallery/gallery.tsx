import { SyntheticEvent, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { LivingSpaceStructure } from "../../../models/livingspace";
import { RootState } from "../../../store/store";
import { useLivingSpace } from "../../hooks.features/use.livingspace";
import {
  LivingSpaceStateStructure,
  loadGallery,
} from "../../reducers.features/livingspace.slice";
import { LivingSpaceRepo } from "../../repo.features/livingspace.repo/livingspace.repo";
import "./gallery.css";

export function Gallery() {
  const repo = useMemo(() => new LivingSpaceRepo(), []);
  const { room, gallery } = useLivingSpace(repo);

  const navigate = useNavigate();

  const galleryArray = useSelector(
    (state: RootState) => state.livingSpaceState.galleryState
  );
  useEffect(() => {
    gallery(); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlerRoom = (event: SyntheticEvent) => {
    const idRoom: any = event.currentTarget.ariaLabel;
    console.log(idRoom);
    room(idRoom);
    navigate("/livingspace/room");
  };
  const handlercreate = (event: SyntheticEvent) => {
    navigate("/livingspace/create");
  };

  return (
    <>
      {/* <p>{galleryArray[0].m2}</p> */}
      <div className="dondestas">
        <button className="gallery__createbutton" onClick={handlercreate}>
          Crear estancia
        </button>
      </div>
      <ul className="gallery__ul">
        {galleryArray.map((item: Partial<LivingSpaceStructure>) => (
          <>
            <section className="gallery__section">
              <p>{item.livingspace}</p>
              <p>{item.m2}m2</p>
              <img
                className="galleryimage"
                src={item.image}
                alt={item.livingspace}
              />

              <p aria-label={item.id} onClick={handlerRoom}>
                Ver
              </p>
            </section>
          </>

          // <Card key={item.id} product={item}></Card>
        ))}
      </ul>
    </>
  );
}
