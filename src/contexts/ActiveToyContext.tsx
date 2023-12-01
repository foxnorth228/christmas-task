import { createContext } from 'react';
import { ITreeToy } from '@store/slices/treeSlice/types';

const ActiveToyContext = createContext<
  [
    { type: number; x: number; y: number; old?: ITreeToy | null },
    ({ type, x, y, old }: { type: number; x: number; y: number; old?: ITreeToy | null }) => void
  ]
>([{ type: -1, x: 0, y: 0, old: null }, () => {}]);

export default ActiveToyContext;
