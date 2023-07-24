import React from 'react';
import { toy } from '@interfaces/toy';

const ToysContext = React.createContext<toy[]>([]);

export default ToysContext;
