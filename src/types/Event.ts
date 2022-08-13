import { EventType } from '$api/event';
import { Item } from 'types/Items';

export type TargetEvent = {
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


export interface EventForm {
  title: string
  openAt: string
  closeAt: string
  hitMessage: string
  missMessage: string
  type: EventType
  hitImageUrl: string
  missImageUrl: string
}

export interface ImageUrls {
  hitImageUrls: string[]
  missImageUrls: string[]
}