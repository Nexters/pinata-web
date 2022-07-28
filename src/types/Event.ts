import { Item } from 'types/Items';

export type Event = {
  id: number;
  title: string;
  code: string;
  type: string;
  openAt: string;
  closeAt: string;
  status: string;
  items: Item[];
  hitMessage: string;
  hitImageUrl: string;
  missMessage: string;
  missImageUrl: string;
};
