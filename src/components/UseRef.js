import React, { useEffect, useRef, useState } from 'react';


const UseRef = () => {
const [myDate, setMyDate] = useState("");
// const [count, setCount] = useState();

const count = useRef(10);

console.log(count);

useEffect(()=>{

    // setCount(count + 1);
    count.current = count.current + 1;
})

  return (
    <>
    <input
    type='text'
    value={myDate}
    onChange={(e)=>setMyDate(e.target.value)}
    />
    <p>The number of times render: {count.current}</p>
    </>
  )
}

export default UseRef;