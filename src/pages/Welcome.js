import './Welcome.css';
import { useNavigate } from 'react-router-dom';

export default function Welcome(){
    const navigate = useNavigate();

    return(

        <div className='container'>
         <header className="App-header">
           Horizon Global Logistics Company
         </header>

        <div>
            <navbar>
              <ul>
                <li>About Us</li>
                <li>Our Services</li>
                <li>Enquries</li>
                <li>Contact Us</li>
              </ul>
            </navbar>
          </div>
        

        <div className='c'>
          <div className='p'>
            <p>Welcome to Horizon Global Logistics Company Website</p>
          </div>

          {/*
          <div>
            <navbar>
              <ul>
                <li>About Us</li>
                <li>Our Services</li>
                <li>Enquries</li>
                <li>Contact Us</li>
              </ul>
            </navbar>
          </div>
          */}

          <div>
            <button className='start-button' onClick={() => navigate("/login")}>Get Started ➜  </button>
          </div>
          
        </div>

        </div>
    );
}