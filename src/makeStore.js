import React, { useContext, useState, useMemo } from 'react';

export default function makeStore() {
  // Make a context for our store
  const context = React.createContext();

  // Make a provider that taken on initialvalue
  const Provider = ({ initialValue = {}, children }) => {
    // Make a new state instance
    const [state, setState] = useState(initialValue);

    // Memoize the context value to update when the state done
    const contextValue = useMemo(() => [state, setState], [state]);

    // Provide the store to children
    return <context.Provider value={contextValue}>{children}</context.Provider>
  };

  // A hook to help us consume the store
  const useStore = () => useContext(context);

  return { Provider, useStore };
}