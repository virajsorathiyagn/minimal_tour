export type IDateValue = {
  day: number;
  month: number;
  year: number;
};

export type ITourItem = {
  id: string;
  name: string;
  location: string;
  originalPrice: number;
  discountPrice: number;
  publish: string;
  images: string[];
  ratingNumber: number;
  bookers: number;
  available: {
    startDate: IDateValue;
    endDate: IDateValue;
  };
};
