import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LivingSpaceStructure } from "../../models/livingspace";

export type LivingSpaceStateStructure = {
  galleryState: LivingSpaceStructure[];
};
const initialState: LivingSpaceStateStructure = {
  galleryState: [
    {
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
        hand: "right | left",
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
  },
});

export const { loadGallery } = livingSpaceSlice.actions;
export const livingSpaceReducer = livingSpaceSlice.reducer;
