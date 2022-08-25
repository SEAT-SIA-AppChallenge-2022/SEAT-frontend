export type AttractionCategory = 'All' | 'Activities' | 'Accommodations' | 'Dining' | 'Tours';

export type Attraction = {
  id: number;
  category: AttractionCategory;
  rating: number;
  descripton: string;
  price?: string;
  title: string;
};
