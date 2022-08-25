import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store/store';
import { Attraction } from '@/types/attractions/attractions';

interface AttractionState {
  allAttractions: Attraction[];
  chosenAttractions: Attraction[];
}

const initialState: AttractionState = {
  allAttractions: [],
  chosenAttractions: [],
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
      state.chosenAttractions = [...state.chosenAttractions, action.payload];
    },
    deleteAttraction: (state, action: PayloadAction<number>) => {
      state.chosenAttractions = [...state.chosenAttractions].filter(attraction => attraction.id !== action.payload);
    },
  },
});

export const { setAllAttractions } = attractionSlice.actions;

export const getAllAttractions = (state: RootState): Attraction[] | null => {
  return state.attraction.allAttractions;
};

export const getChosenAttractions = (state: RootState): Attraction[] | null => {
  return state.attraction.chosenAttractions;
};

export default attractionSlice.reducer;
