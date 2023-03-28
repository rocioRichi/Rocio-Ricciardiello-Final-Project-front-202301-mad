import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LivingSpaceStructure } from "../../models/livingspace";

export type LivingSpaceStateStructure = {
  galleryState: LivingSpaceStructure[];
  roomDetail: LivingSpaceStructure[];
};
const initialState: LivingSpaceStateStructure = {
  galleryState: [
    {
      id: "",
      m2: 1,
      livingspace: "inicial space",
      image:
        "https://media.admagazine.com/photos/61dde7c6089751617cd2fc5e/master/pass/Tendencias-ba%C3%B1o-2022.jpg",
    },
  ],
  roomDetail: [
    {
      id: "",
      m2: 0,
      livingspace: "",
      window: {
        m2: "",
        ref: "",
      },
      floor: {
        m2: "",
        ref: "",
      },
      wardrobe: {
        m2: "",
        ref: "",
      },
      walls: {
        m2: "",
        ref: "",
      },
      door: {
        hand: "right",
        ref: "",
      },
    },
  ],
};

export const livingSpaceSlice = createSlice({
  name: "livingspace",
  initialState,
  reducers: {
    loadGallery(
      state: LivingSpaceStateStructure,
      action: PayloadAction<LivingSpaceStructure[]>
    ) {
      state.galleryState = action.payload;
    },
    loadRoom(
      state: LivingSpaceStateStructure,
      action: PayloadAction<LivingSpaceStructure[]>
    ) {
      state.roomDetail = action.payload;
    },
  },
});

export const { loadGallery, loadRoom } = livingSpaceSlice.actions;
export const livingSpaceReducer = livingSpaceSlice.reducer;
