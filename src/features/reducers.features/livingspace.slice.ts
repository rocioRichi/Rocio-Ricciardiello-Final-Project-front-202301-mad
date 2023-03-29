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
        "https://firebasestorage.googleapis.com/v0/b/coders2023-finalproject.appspot.com/o/aseo.jpg?alt=media&token=c09dcf49-22b1-4586-8cc5-c2d7961e57a7",
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
