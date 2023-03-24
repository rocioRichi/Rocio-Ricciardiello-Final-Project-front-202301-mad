import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { loadGallery } from "../reducers.features/livingspace.slice";
import { LivingSpaceRepo } from "../repo.features/livingspace.repo/livingspace.repo";

export function useLivingSpace(repo: LivingSpaceRepo) {
  const galleryState = useSelector(
    (state: RootState) => state.livingSpaceState
  );

  const dispatch = useDispatch<AppDispatch>();

  const gallery = async () => {
    try {
      const data = await repo.getAll("livingspace");
      dispatch(loadGallery(data.results));
    } catch (error) {
      console.error((error as Error).message);
    }
  };

  return {
    galleryState,
    gallery,
  };
}
