import { createContext } from 'react';

const ActiveToyContext = createContext<[number, (num: number) => void]>([0, (num: number) => {}]);

export default ActiveToyContext;
