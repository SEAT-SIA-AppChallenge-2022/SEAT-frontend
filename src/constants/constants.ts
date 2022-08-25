import cartIconFilled from '@/assets/icons/cart-icon-filled.svg';
import dollarIconFilled from '@/assets/icons/dollar-icon-filled.svg';
import shopIconFilled from '@/assets/icons/shop-icon-filled.svg';
import dollarIconUnFilled from '@/assets/icons/dollar-icon-unfilled.svg';
import shopIconUnFilled from '@/assets/icons/shop-icon-unfilled.svg';
import { NavigationState } from '@components/TopNavigationBar/TopNavigationBar';
import { AttractionCategory, AttractionOption } from '@/types/attractions/attractions';
import { Timezone } from '@/types/DateTime/DateTime';

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

export const attractionTypes: AttractionOption[] = [
  { id: 1, option: attractions.all },
  { id: 2, option: attractions.activities },
  { id: 3, option: attractions.accommodations },
  { id: 4, option: attractions.dining },
  { id: 5, option: attractions.tours },
];

export const timezones = {
  sg: 'Asia/Singapore' as Timezone,
};

export const navigationStates: NavigationState = {
  pickAttractions: {
    icon1: cartIconFilled,
    icon2: shopIconUnFilled,
    icon3: dollarIconUnFilled,
  },
  reviewCart: {
    icon1: cartIconFilled,
    icon2: shopIconFilled,
    icon3: dollarIconUnFilled,
  },
  completePayment: {
    icon1: cartIconFilled,
    icon2: shopIconFilled,
    icon3: dollarIconFilled,
  },
};
