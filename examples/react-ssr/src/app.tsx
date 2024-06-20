import React from 'react';

export const App: React.FC<{ state }> = ({ state }) => {
  const { context } = state;

  return <div>App</div>;
};
