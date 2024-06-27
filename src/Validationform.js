// import {useState}  from 'react'
// function Validationform()
// { const [name,setname]=useState()
//   const [password,setpassword]=useState()
//   const [passworderr,setpassworderr]=useState(false)
//   const [usererr,setusererr]=useState(false)
//     function username(e){
//        setname( e.target.value)
//       if(name.length<=3){
//         setusererr(true)
//       }
//       else{
//         setusererr(false)
//       }
//       console.log(e.target.value)
//    }
//    function userlogin(e){
      
//       if( name.length<=3||password.length<=5){
//        alert("enter correct details")
//       }
//       else{
//        alert("login success")
//       }
      
//    }
//    function userpassword(e){
//       setpassword (e.target.value)
//       if(password.length<=5){
//         setpassworderr(true)
//       }
//       else{
//         setpassworderr(false)
//       }
//       console.log(e.target.value)
//    }
//    function submit(e){
//       e.preventDefault()
//    }
//     return (
//     <div  style={{textAlign: 'center'}}>
//     <h1>hello</h1>
//     <form onSubmit={submit}>
//         <input type="text" placeholder="user name" onChange={username}/><br/><br/>
//         {
//           usererr?<span>user name is not valid</span>
//             :null
//         }<br/><br/>
//         <input type="text" placeholder="Enter password" onChange={userpassword}/><br/><br/>
//          {
//           passworderr?<span>Password is not valid</span>
//             :null
//         }<br/><br/>
//         <button type="submit" onClick={userlogin}>Login</button>
//     </form>
    
//     </div>
//     ) 
// }
// export default Validationform