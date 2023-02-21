import dataToys from './data.json';

export type toy = {
  num: number;
  name: string;
  count: number;
  year: number;
  shape: string;
  color: string;
  size: string;
  favorite: boolean;
};

export function getData() {
  return dataToys.map((elem) => {
    const shapeEngValue = shape.find((el) => el[1] === elem.shape);
    const colorEngValue = color.find((el) => el[1] === elem.color);
    const sizeEngValue = size.find((el) => el[1] === elem.size);
    return {
      ...elem,
      shape: shapeEngValue ? shapeEngValue[0] : '',
      color: colorEngValue ? colorEngValue[0] : '',
      size: sizeEngValue ? sizeEngValue[0] : '',
      num: Number.parseInt(elem.num),
      count: Number.parseInt(elem.count),
      year: Number.parseInt(elem.year),
    };
  });
}

export function convertDataShape(type: string) {
  const newType = shape.find((el) => el[0] === type);
  return newType ? newType[1] : '';
}

export function convertDataColor(type: string) {
  const newType = color.find((el) => el[0] === type);
  return newType ? newType[1] : '';
}

export function convertDataSize(type: string) {
  const newType = size.find((el) => el[0] === type);
  return newType ? newType[1] : '';
}

const shape = [
  ['ball', 'шар'],
  ['bell', 'колокольчик'],
  ['cone', 'шишка'],
  ['snow', 'снежинка'],
  ['toy', 'фигурка'],
];

const color = [
  ['white', 'белый'],
  ['yellow', 'желтый'],
  ['red', 'красный'],
  ['blue', 'синий'],
  ['green', 'зелёный'],
];

const size = [
  ['big', 'большой'],
  ['medium', 'средний'],
  ['small', 'малый'],
];
