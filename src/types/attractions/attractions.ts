export type AttractionCategory = 'All' | 'Activities' | 'Accommodations' | 'Dining' | 'Tours';

export type Attraction = {
  id: number;
  category: AttractionCategory;
  rating: number;
  description: string;
  imgUrl: string;
  price?: string;
  title: string;
  tripRef: string;
};
