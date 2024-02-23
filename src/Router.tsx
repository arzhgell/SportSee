import React, { createContext, useEffect, useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { Layout } from 'components/Layout';

import { Home } from './containers/Home';
import { getUser } from 'tools/API';
import { UserType } from 'tools/Types';

type GlobalContextType = {
  user?: UserType;
};

export const GlobalContext = createContext<GlobalContextType>({
  user: undefined,
});

export function Router() {
  const [user, setUser] = useState();

  const fetchCurrentUser = async () => {
    const response = await getUser(12);
    setUser(response.data.data);
  };

  useEffect(() => {
    fetchCurrentUser();
  }, []);
  return (
    <GlobalContext.Provider value={{ user }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </GlobalContext.Provider>
  );
}
