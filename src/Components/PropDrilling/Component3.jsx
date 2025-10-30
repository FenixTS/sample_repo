// import React from 'react'
 import React, { useContext } from 'react';

 import { UserContext } from '../../App';
function Component3() {

    const user = useContext(UserContext);
  return (
    <>
    <h2>Component3</h2>
    <p>I need Data here  {user.name}</p>
    </>
  )
}

export default Component3