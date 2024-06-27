import {useState} from 'react'
function Toggle(){
    const [log,logstatus]=useState(false)
    return(
       <div style={{textAlign: 'center'}}>
        {log?
            <h1>Login</h1>
            :null
        }
        {/* <button onClick={()=>logstatus(false)}>Hide</button>
        <button onClick={()=>logstatus(true)}>Show</button> */}
        <button onClick={()=>logstatus(!log)}>Toggle</button>
        </div>
        )
}
export default Toggle