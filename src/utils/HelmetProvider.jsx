import React from 'react';
import { HelmetProvider } from 'react-helmet-async';

const HelmetWrapper = ({ children }) => (
  <HelmetProvider>{children}</HelmetProvider>
);

export default HelmetWrapper;
