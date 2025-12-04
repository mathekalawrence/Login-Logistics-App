import { useNavigate } from "react-router-dom";


function Register() {
    const navigate = useNavigate();


    return(
        <div className="container">

            <button className="back-button" onClick={() => navigate("login")}> ←Back</button>

            <h2>Create Account</h2>

            <input type="text" placeholder="Full Name" className="input" />
            <input type="email" placeholder="Email Address" className="input" />
            <input type="password" placeholder="Password" className="input" />

            <button className="register-btn" onClick={()=> navigate("/main")}>Register</button>


        </div>

    );
}
export default Register;

//const styles({

//});