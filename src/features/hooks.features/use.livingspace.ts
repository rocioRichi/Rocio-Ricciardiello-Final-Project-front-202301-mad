import { useDispatch, useSelector } from "react-redux";
import { LivingSpaceStructure } from "../../models/livingspace";
import { AppDispatch, RootState } from "../../store/store";
import { loadGallery, loadRoom } from "../reducers.features/livingspace.slice";
import { LivingSpaceRepo } from "../repo.features/livingspace.repo/livingspace.repo";

export function useLivingSpace(repo: LivingSpaceRepo) {
  const galleryState = useSelector(
    (state: RootState) => state.livingSpaceState
  );
  const tokenData = useSelector((state: RootState) => state.users.token);
  const dispatch = useDispatch<AppDispatch>();

  const createLivingSpace = async (
    newLivingSpace: Partial<LivingSpaceStructure>
  ) => {
    try {
      await repo.create(newLivingSpace, "/create");
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  const gallery = async () => {
    try {
      const data = await repo.getAll("livingspace");
      dispatch(loadGallery(data.results));
    } catch (error) {
      console.error((error as Error).message);
    }
  };
  const room = async (id: string) => {
    try {
      const data = await repo.getById("livingspace", id);
      dispatch(loadRoom(data));
    } catch (error) {
      console.error((error as Error).message);
    }
  };
  const deleteLivingSpace = async (id: string) => {
    try {
      await repo.delete(id, tokenData);
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return {
    galleryState,
    gallery,
    createLivingSpace,
    room,
    deleteLivingSpace,
  };
}
