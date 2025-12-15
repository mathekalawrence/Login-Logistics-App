import { useNavigate } from "react-router-dom";
import './Login.css';

function Login() {
    const navigate = useNavigate();

    return(
        <div className="container">
            <header className="login-header">Horizon Global Logistics</header>

            <button className="backButton" onClick={()=> navigate("/")}> ←Back</button>
            <fieldset className="fieldset-login">

            <h2 className="login-h2">Login into your Account</h2>
            <hr></hr>

            <div className="input">
                <label>Email Address</label> <br/>
                <input type="email" placeholder="Email Address" /> <br/>

                <label>Password</label> <br/>
                <input type="password" placeholder="Enter Password" /> <br/>

                <button onClick={() => navigate("/main")}>Submit</button>

                <p>
                    No Account? {" "}
                    <span className="link" onClick={() => navigate("/register")}>
                        <a href="Register.js">Register</a>
                    </span>
                </p>

            </div>

        </fieldset>


        </div>
    );

}
export default Login;