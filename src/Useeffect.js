import {useEffect,useState} from "react"

function Useeffect(){
    const [data,setdata]=useState(0)
    const [info,setinfo]=useState("set" +0+1)
    
   useEffect(
    ()=>{
       console.warn(data)
    },[data]
   )

   return(
   <div style={{textAlign: 'center'}}>
   <h1> FOR DATA::{data}</h1>
   <button onClick={()=> setdata(data+50)}> Click me</button><br/><br/>
   <h1>FOR INFO::{info}</h1>
   <button onClick={()=> setinfo(info+1)}>click for info </button>
   </div>
   )
}
export default Useeffect
