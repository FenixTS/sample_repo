import React from 'react';
import Component1 from './Components/PropDrilling/Component1';
import API_fetch from './Components/API_fetch';


export const UserContext = React.createContext();

function App() {
  const user = { name: "Fenix", role: "Admin" };
  return (
    // <UserContext.Provider value={user}>
    //   <Component1 />
    // </UserContext.Provider>

    <API_fetch />
    
  );
}

export default App;
