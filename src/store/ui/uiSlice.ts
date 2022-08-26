import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '@/store/store';

interface UiState {
  isViewAttractionModalOpen: boolean;
  isLoginModalOpen: boolean;
}

const initialState: UiState = {
  isViewAttractionModalOpen: false,
  isLoginModalOpen: true,
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
    showLoginModal: state => {
      state.isLoginModalOpen = true;
    },
    hideLoginModal: state => {
      state.isLoginModalOpen = false;
    },
  },
});

export const { showAttractionModal, hideAttractionModal, showLoginModal, hideLoginModal } = uiSlice.actions;

export const getIsAttractionModalOpen = (state: RootState): boolean | null => {
  return state.ui.isViewAttractionModalOpen;
};

export const getIsLoginModalOpen = (state: RootState): boolean | null => {
  return state.ui.isLoginModalOpen;
};

export default uiSlice.reducer;
