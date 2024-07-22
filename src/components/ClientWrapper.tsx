'use client';

import { Provider } from 'react-redux';
import store from '@/srore/store';
import { ReactNode } from 'react';


const ClientWrapper = ({ children }: { children: ReactNode }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ClientWrapper;
