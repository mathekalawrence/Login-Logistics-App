import './Welcome.css';
import { useNavigate } from 'react-router-dom';

export default function Welcome(){
    const navigate = useNavigate();

    return(

        <div className='body'>
         <header className="App-header">
           Horizon Global Logistics Company
         </header>

        <div className='c'>
          <div className='p'>
            <p>Welcome to Horizon Global Logistics Company Website</p>
          </div>

          <div>
            <button className='start-button' onClick={() => navigate("/login")}>Get Started ➜  </button>
          </div>
          
        </div>

        </div>
    );
}