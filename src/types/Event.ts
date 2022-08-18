import { EventType } from '$api/event';
import { GiftItem } from '$api/gift';

export type TargetEvent = {
  id: number;
  title: string;
  code: string;
  type: string;
  openAt: string;
  closeAt: string;
  status: string;
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
  items: GiftItem[]
}

export interface ImageUrls {
  hitImageUrls: string[]
  missImageUrls: string[]
}