import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/store/store';

interface UiState {
  isViewAttractionModalOpen: boolean;
}

const initialState: UiState = {
  isViewAttractionModalOpen: false,
};

export const uiSlice = createSlice({
  name: 'ui',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    showAttractionModal: state => {
      state.isViewAttractionModalOpen = true;
    },
    hideAttractionModal: state => {
      state.isViewAttractionModalOpen = false;
    },
  },
});

export const { showAttractionModal, hideAttractionModal } = uiSlice.actions;

export const getIsAttractionModalOpen = (state: RootState): boolean | null => {
  return state.ui.isViewAttractionModalOpen;
};

export default uiSlice.reducer;
