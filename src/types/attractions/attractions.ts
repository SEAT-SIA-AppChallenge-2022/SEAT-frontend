export type AttractionCategory = 'All' | 'Activities' | 'Accommodations' | 'Dining' | 'Tours';
import DateTime from '@/types/DateTime/DateTime';

export interface Attraction {
  id: number;
  category: AttractionCategory;
  rating: number;
  description: string;
  imgUrl: string;
  price?: string;
  title: string;
}

export interface ChosenAttraction extends Attraction {
  tripRef: string;
  chosenDate: DateTime;
}

export type AttractionOption = {
  id: number;
  option: AttractionCategory;
};
