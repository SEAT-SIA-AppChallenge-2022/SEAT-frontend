import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import type { RootState } from '@/store/store';
import { Attraction, ChosenAttraction } from '@/types/attractions/attractions';

interface AttractionState {
  allAttractions: Attraction[];
  recommendedAttractions: Attraction[];
  chosenAttractions: ChosenAttraction[];
  currentAttractionView: number | undefined;
  isPurchased: boolean;
}

const initialState: AttractionState = {
  allAttractions: [],
  recommendedAttractions: [],
  chosenAttractions: [],
  currentAttractionView: undefined,
  isPurchased: false,
};

export const attractionSlice = createSlice({
  name: 'attraction',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setPurchased: state => {
      state.isPurchased = true;
    },
    setAllAttractions: (state, action: PayloadAction<Attraction[]>) => {
      state.allAttractions = action.payload;
    },
    setRecommendedAttractions: (state, action: PayloadAction<Attraction[]>) => {
      state.recommendedAttractions = action.payload;
    },
    addAttraction: (state, action: PayloadAction<ChosenAttraction>) => {
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

export const { setAllAttractions, setCurrentAttractionView, addAttraction, deleteAttraction, setRecommendedAttractions, setPurchased } =
  attractionSlice.actions;

export const getAllAttractions = (state: RootState): Attraction[] | null => {
  return state.attraction.allAttractions;
};

export const getRecommendedAttractions = (state: RootState): Attraction[] | null => {
  return state.attraction.recommendedAttractions;
};

export const getChosenAttractions = (state: RootState): ChosenAttraction[] | null => {
  return state.attraction.chosenAttractions;
};

export const getCurrentAttractionView = (state: RootState): Attraction | undefined => {
  const id = state.attraction.currentAttractionView;
  if (!id) return undefined;
  return state.attraction.allAttractions.find(attraction => attraction.id === id);
};

export const getIsPurchased = (state: RootState): boolean => {
  return state.attraction.isPurchased;
};

export default attractionSlice.reducer;
