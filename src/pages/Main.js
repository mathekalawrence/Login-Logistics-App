import { useNavigate } from "react-router-dom";                                                                                                                        

function Main() {
    const navigate = useNavigate();

    return(
        <div className="container">
            
            <button className="back-button" onPress={()=> navigate("Register")} >Back</button>
            

        </div>


    );

}

export default Main;