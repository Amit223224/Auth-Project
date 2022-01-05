import React from 'react'

const Login = (props) => {
     const {
    email,
    setemail,
    password,
    setpassword, 
    handleLogin,
    handleSignup,
    hasAccount,
    setHasAccount,
    emailerr, 
    passworderr
       } = props;

    return (
        <section className="login">
          <div className="loginContainer">
          <label >UserName</label>
          <input type="text" autoFocus  required value={email} onChange={(e=>setemail(e.target.value))}/>
           <p className="errormsg">{emailerr}</p>

             <label >Password</label>
          <input type="password" autoFocus required value={password} onChange={(e=>setpassword(e.target.value))}/>
           <p className="errormsg">{passworderr}</p>  
         
           <div className="btnContainer">
           {hasAccount ? (
               <>
               <button onClick={handleLogin} >Sign In</button>
               <p> Don't have an account ? <span onClick={()=>setHasAccount(!hasAccount)}>Sign up</span></p>
               </>
           ):(
                <>
               <button onClick={handleSignup} >Sign up</button>
               <p> Have an account ? <span onClick={()=>setHasAccount(!hasAccount)}>Sign In</span></p>
               </>
           )}
           </div>
            </div>
        </section>
    )
}

export default Login;
