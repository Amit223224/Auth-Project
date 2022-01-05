
import React,{useState, useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import fire from "./Firebase";
import { getAuth, onAuthStateChanged ,signInWithEmailAndPassword,  createUserWithEmailAndPassword , } from "firebase/auth";
import Login from './Login';
import Hero from './Hero'
import './App.css';


function App() {
  const [user, setuser]= useState('');
  const [email, setemail]= useState('');
  const [password , setpassword]= useState('');
  const[emailerr, setemailerr]= useState('');
  const[passworderr, setpassworderr]= useState('');
  const [hasAccount, setHasAccount]= useState('false');

  const clearInputs =()=>{
    setemail('');
    setpassword('');
  }


   const clearErrors =()=>{
    setemailerr('');
    setpassworderr('');
  } 

const handleLogin =()=>{
  clearErrors();
const auth = getAuth();
signInWithEmailAndPassword( auth, email, password)
.catch(err =>{
  switch(err.code){
  case "auth/invalid-email":
  case "auth/user-disabled":
  case "auth/user-not-found":
  setemailerr (err.message);
  break;
  case "auth/wrong-password":
  setpassworderr(err.message);
break;
  };
  
})

}
const handleSignup =()=>{
clearErrors();
const auth = getAuth();
createUserWithEmailAndPassword(auth, email, password)
.catch(err =>{
  switch(err.code){
  case "auth/email-alerady-in-use":
  case "auth/invalid-email":

  setemailerr (err.message);
  break;
  case "auth/week-password":
  setpassworderr(err.message);
break;
};
})
}

const handleLogout =()=>{
signout(auth);


}


const authListener =()=>{
onAuthStateChanged(auth,(user) =>{
    if(user){
      clearInputs();
      setuser(user);
    }
      else {
        setuser(""); }
  })
}


 useEffect(()=>{
authListener();
 },[]);

  return (

     <div className="App">
     {user ?( <Hero handleLogout={handleLogout}/>):
     (<Login 
      email = {email}
      setemail = {setemail}
      password = {password}
      setpassword = {setpassword}
      handleLogin = {handleLogin}
      handleSignup = {handleSignup}
      hasAccount = {hasAccount}
      setHasAccount = {setHasAccount}
      emailerr = {emailerr}
      passworderr = {passworderr}/>
    )
     }
     

     </div>

  );
}

export default App;



