import React, {useState, createContext} from 'react'


const [count, setCount] = useState(0)

  const increaseCart =()=>{
    setCount(count + 1)
  }


  export default increaseCart