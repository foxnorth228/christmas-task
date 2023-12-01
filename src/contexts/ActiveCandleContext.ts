import { createContext } from 'react';
import { ICandleTree } from '@store/slices/treeSlice/types';

const ActiveCandleContext = createContext<
  [
    { type: number; x: number; y: number; old?: ICandleTree | null },
    ({ type, x, y, old }: { type: number; x: number; y: number; old?: ICandleTree | null }) => void
  ]
>([{ type: -1, x: 0, y: 0, old: null }, () => {}]);

export default ActiveCandleContext;
