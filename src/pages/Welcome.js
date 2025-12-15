import './Welcome.css';
import { useNavigate } from 'react-router-dom';

export default function Welcome(){
    const navigate = useNavigate();

    return(

        <div className='container'>
         <header className="App-header">
           Horizon Global Logistics Company
         </header>
        
            <nav className='navbar'>

              <div className='nav-container'>
                {/* Logo here*/}
                <div className='nav-logo'>
                  <h2><a href='#logo'>HGL</a></h2>
                </div>

               <ul className='nav-menu'>
                <li className='nav-item'><a href='#about' className='nav-link'>About Us</a></li>

               <li className='nav-item'>
                  <a href="#services" className='nav-link'>Our Services</a>
                  </li>

                <li className='nav-item'><a href='#book' className='nav-link'>Book</a></li>

                <li className='nav-item'><a href='#enquiries' className='nav-link'>Enquries</a></li>

                <li className='nav-item'><a href='#manage' className='nav-link'>Manage</a></li>

                <li className='nav-item'><a href='#contact' className='nav-link'>Contact Us</a></li>

                <li className='nav-item'><a href='#support' className='nav-link'>Support</a></li> 
               </ul>

              </div>
             </nav>
        
          <div className='c'>
           
            <p>Welcome to Horizon Global Logistics Company Website</p>
           

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

           
            <button className='start-button' onClick={() => navigate("/login")}>Get Started ➜  </button>
            <button className='nav-buttun'>Get Started</button>    
          
          </div>

      </div>
        
    
    );
};