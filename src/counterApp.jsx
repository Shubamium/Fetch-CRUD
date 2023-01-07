import { createContext, useState } from 'react'
import useLogging from './useLogging'
import { useContext } from 'react';
import counterContext from './counterContext';

const Counter = () => {
  const count = useContext(counterContext);
  return ( <div>
    { count.count } hello
  </div> );
}
const AddButton = ()=>{
  const {count, addCount} = useContext(counterContext);
  return (<button onClick={addCount}>
  Add Count    { count }
  </button>)
}
function App() {
  let [count, setCount] = useState(0);
  let addCount = ()=> {
    setCount((c) => c+1);
  }
  return (
    <div className="App">
      <counterContext.Provider value={{count , addCount}}>
        <Counter />
        <AddButton />
      </counterContext.Provider>
    </div> 
  )
}

export default App
