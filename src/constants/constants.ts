import cartIconFilled from '@/assets/icons/cart-icon-filled.svg';
import dollarIconFilled from '@/assets/icons/dollar-icon-filled.svg';
import shopIconFilled from '@/assets/icons/shop-icon-filled.svg';
import dollarIconUnFilled from '@/assets/icons/dollar-icon-unfilled.svg';
import shopIconUnFilled from '@/assets/icons/shop-icon-unfilled.svg';
import { NavigationState } from '@components/TopNavigationBar/TopNavigationBar';
import { AttractionCategory } from '@/types/attractions/attractions';

export const severity = {
  SUCCESS: 'success',
  LOADING: 'loading',
  ERROR: 'error',
  WARNING: 'warning',
  INFO: 'info',
};

export const attractions = {
  all: 'All' as AttractionCategory,
  activities: 'Activities' as AttractionCategory,
  accommodations: 'Accommodations' as AttractionCategory,
  dining: 'Dining' as AttractionCategory,
  tours: 'Tours' as AttractionCategory,
};

export const navigationStates: NavigationState = {
  pickAttractions: {
    icon1: cartIconFilled,
    icon2: dollarIconUnFilled,
    icon3: shopIconUnFilled,
  },
  reviewCart: {
    icon1: cartIconFilled,
    icon2: dollarIconFilled,
    icon3: shopIconUnFilled,
  },
  completePayment: {
    icon1: cartIconFilled,
    icon2: dollarIconFilled,
    icon3: shopIconFilled,
  },
};
