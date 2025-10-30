import React from 'react';
import CounterWithRef from './Components/UseRef/InputFocusExample';
import RefDomManipulationExample from './Components/UseRef/WithUseRef';
import RefDomManipulationWithoutRef from './Components/UseRef/WithoutUseRef';
import WithoutCallBack from './Components/UseCallback.jsx/WithoutCallBack';
import WithCallBack from './Components/UseCallback.jsx/WithCallBack';
import Parent from './Components/UseCallback.jsx/Parent&Child';




export const UserContext = React.createContext();

function App() {
  const user = { name: "Fenix", role: "Admin" };
  return (
   

  //  <CounterWithRef/>
  // <RefDomManipulationExample/>
  // <RefDomManipulationWithoutRef/>

  // <WithoutCallBack/>
//  <WithCallBack/>
<Parent/>
    
  );
}

export default App;
