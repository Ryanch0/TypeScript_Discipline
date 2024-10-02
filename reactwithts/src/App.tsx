import React, { useState } from 'react';
import './App.css';


let box = <div></div>

function App() {

  const [user, setUser] = useState<string | number>('Kim')

  return (
  <div>
    <Profile name='Ryan' age='40'></Profile>
  </div>
  );
}


export function Profile(props:{name:string, age:string}):JSX.Element{
  const {name, age} = props
  return (
    <>
    <div>{name}</div>
    <div>{age}</div>
    </>
  )
}

export default App;
