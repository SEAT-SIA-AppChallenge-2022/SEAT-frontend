import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store/store';
import { Attraction } from '@/types/attractions/attractions';

interface AttractionState {
  allAttractions: Attraction[];
  chosenAttractions: Attraction[];
  currentAttractionView: number | undefined;
}

const initialState: AttractionState = {
  allAttractions: [],
  chosenAttractions: [],
  currentAttractionView: undefined,
};

export const attractionSlice = createSlice({
  name: 'attraction',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setAllAttractions: (state, action: PayloadAction<Attraction[]>) => {
      state.allAttractions = action.payload;
    },
    addAttraction: (state, action: PayloadAction<Attraction>) => {
      const exists = state.chosenAttractions.find(
        attraction => attraction.id === action.payload.id && attraction.tripRef === action.payload.tripRef,
      );
      if (exists) return;
      state.chosenAttractions = [...state.chosenAttractions, action.payload];
    },
    deleteAttraction: (state, action: PayloadAction<number>) => {
      state.chosenAttractions = [...state.chosenAttractions].filter(attraction => attraction.id !== action.payload);
    },
    setCurrentAttractionView: (state, action: PayloadAction<number>) => {
      state.currentAttractionView = action.payload;
    },
  },
});

export const { setAllAttractions, setCurrentAttractionView, addAttraction, deleteAttraction } = attractionSlice.actions;

export const getAllAttractions = (state: RootState): Attraction[] | null => {
  return state.attraction.allAttractions;
};

export const getChosenAttractions = (state: RootState): Attraction[] | null => {
  return state.attraction.chosenAttractions;
};

export const getCurrentAttractionView = (state: RootState): Attraction | undefined => {
  const id = state.attraction.currentAttractionView;
  if (!id) return undefined;
  return state.attraction.allAttractions.find(attraction => attraction.id === id);
};

export default attractionSlice.reducer;
