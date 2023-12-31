import React, { useState } from "react";
import './LoginSignup.css'


const LoginSignup = () => {

    const[action , setAction] =useState("CONNECTEZ VOUS");




    return (
        <div className="container1"> 
        <div className="header">
            <div className="text">
                {action}
            </div>
            <div className="underline">
            </div>
        </div>
        <div className="inputs">
            {action==="CONNECTEZ VOUS"?<div></div>:
            <div className="abc">
                <div className="input">
                    <input type="text" placeholder="    Nom"/>
                </div> 
                <div className="input">
                    <input type="text" placeholder="    Prénom" />
                </div>
                <div className="input">
                    <input type="phone" placeholder="    Num de téléphone"/>
                </div>
            </div>
            
            }
            <div className="input">
                <input type="email" placeholder="    Email"/>
            </div>
            <div className="input">
                <input type="password" placeholder="    Mot de passe" />
            </div>
            {action==="CONNECTEZ VOUS"?<div></div>:
            <div className="input">
                    <input type="password" placeholder="    Confirmer votre mot de passe"/>
            </div>}
        </div>
        {action==="S'INSCRIRE"?<div></div>:
            <div className="forgot-password">Mot de passe oublié?<span>   Cliquez ici</span></div>
            }
        
        <div className="submit-container">
            <div className={action==="CONNECTEZ VOUS"?"submit gray":"submit"} onClick={()=>{setAction("S'INSCRIRE")}}>
                S'INSCRIRE
            </div>
            <div className={action==="S'INSCRIRE"?"submit gray":"submit"}onClick={()=>{setAction("CONNECTEZ VOUS")}}>
                CONNECTEZ VOUS 
            </div>
        
       
        </div>
        </div>
    
    )
}

export default LoginSignup 