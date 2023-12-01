import { toy } from '@interfaces/toy';

export interface ICard {
  elem: toy;
  isRender: boolean;
  selectToy: (num: number) => unknown;
}
