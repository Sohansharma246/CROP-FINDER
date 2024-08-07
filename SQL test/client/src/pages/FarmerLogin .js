// import React , {useState} from 'react';
// import { useNavigate } from 'react-router-dom';
// import Axios from 'axios';
// import parag from "../images/5048173.webp";  

// import { Link } from 'react-router-dom';

// const FarmerLogin = () => {
//   const [username,setUsername] = useState("");
//   const [password,setPassword] = useState("");

//   //const [loginStatus,setLoginStatus] = useState("");
//   const navigate = useNavigate();
//   const login =() =>{
//     Axios.post('http://localhost:3002/login',{
//     uname: username,
//     password: password,
//     }).then(res =>{
//       if(res.data==="Success"){
//         //setLoginStatus(response.data.message);
//         alert("Login Successful");
//         navigate('/details');
        
//       }else{
//         //setLoginStatus(response.data[0].uname);
//         alert("No record exist");
//       }
//     })
//     .catch(err => console.log(err));
//   };

//   return (
//     <>
//       <nav className="navbar">
//         <div className="ss">
//           <Link className="first" to="/">
//             <img className="img1" src={parag} alt="" /> CROP FINDER
//           </Link>
//         </div>
//         <div className="ask">
//           <Link to="/">Home</Link>
//           <Link to="#">About us</Link>
//           <Link to="/login" className="btn1">
//             Log in
//           </Link>
//           <Link to="/signup" className="btn1">
//             Sign up
//           </Link>
//         </div>
//       </nav>

//       <div id="man">
//         <h1 className="lh1">Farmer Log In</h1>
//         <form>
//           <div id="first">
//             <i className="fa-solid fa-user"></i>
//             <input type="text" id="username" placeholder="username" onChange={(e) =>{
//               setUsername(e.target.value);
//             }}/>
//           </div>
//           <div id="second">
//             <i className="fa-solid fa-lock"></i>
//             <input type="password" id="password" placeholder="password" onChange={(e) =>{
//               setPassword(e.target.value);
//             }}/>
//           </div>
//           <button id="nn" type="submit" onClick={login}>
//           Submit 
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default FarmerLogin;
import React , {useState} from 'react';
import { useNavigate } from 'react-router-dom';
import Axios from 'axios';
import parag from "../images/5048173.webp";  
import validation from './LoginValidation';
import { Link } from 'react-router-dom';

const FarmerLogin = () => {
  const [values,setValues] = useState({
    email: '',
    password: ''
  })
  // const [username,setUsername] = useState("");
  // const [password,setPassword] = useState("");

  const [errors,setErrors] = useState({})

  const handleInput =(event) =>{
    setValues(prev => ({...prev,[event.target.name]: [event.target.value]}))
  }

  const handleSubmit =(event) =>{
    event.preventDefault();
    setErrors(validation(values));
  }

  //const [loginStatus,setLoginStatus] = useState("");
  const navigate = useNavigate();
  const login =() =>{
    Axios.post('http://localhost:3002/login',{
    address: values.email,
    password: values.password,
    }).then(res =>{
      if(res.data==="Success"){
        //setLoginStatus(response.data.message);
        alert("Login Successful");
        navigate('/details');
        
      }else{
        //setLoginStatus(response.data[0].uname);
        alert("No record exist");
      }
    })
    .catch(err => console.log(err));
  };

  return (
    <>
      <nav className="navbar">
        <div className="ss">
          <Link className="first" to="/">
            <img className="img1" src={parag} alt="" /> CROP FINDER
          </Link>
        </div>
        <div className="ask">
          <Link to="/">Home</Link>
          <Link to="#">About us</Link>
          <Link to="/login" className="btn1">
            Log in
          </Link>
          <Link to="/signup" className="btn1">
            Sign up
          </Link>
        </div>
      </nav>

      <div id="man">
        <h1 className="lh1">Farmer Log In</h1>
        <form action="" onSubmit={handleSubmit}>
          <div id="first">
          <i class="fa-solid fa-envelope"></i>
            <input type="text" id="username" placeholder="Email" name='email' onChange={handleInput}/>
            {errors.email && <span className='text-danger'> {errors.email}</span>}
          </div>
          <div id="second">
            <i className="fa-solid fa-lock"></i>
            <input type="password" id="password" placeholder="password" name='password' onChange={handleInput}/>
            {errors.password && <span className='text-danger'> {errors.password}</span>}
          </div>
          <button id="nn" type="submit" onClick={login}>
          SUBMIT
          </button>
        </form>
      </div>
    </>
  );
};

export default FarmerLogin;