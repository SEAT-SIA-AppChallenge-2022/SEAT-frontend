export type AttractionCategory = 'All' | 'Activities' | 'Accommodations' | 'Dining' | 'Tours';

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
  chosenDate: string;
}
