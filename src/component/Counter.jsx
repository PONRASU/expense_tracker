import React ,{useEffect,useState}from "react";

const Counter=()=>
{
    const [number,setNumber]=useState(0);
    const [text,setext]=useState("hello");
    
    return(<div>
        <div>{number}</div> 
        <div>new app</div>
        <div>{text}</div>
    <button onClick={()=>setNumber(Math.random())}>update number</button></div>)
}
export default Counter;