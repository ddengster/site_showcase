import React from 'react';
import Footer from './Footer';
import Header from './Header';
import Button from '@mui/material/Button';

export default function Landing() {

  return(
    <React.Fragment>
      <Header/>
      
      <div className='landing_s1' style={{ backgroundImage: `url(${process.env.PUBLIC_URL + '/STORMSPIRE.jpg'})` }}>
        <div className='landing_s1_inner'>
          <div className='landing_s1_h1'>
            <span style={{ color: '#00ccff', fontSize:'40px'}}>CompanyX</span>
            <br/>
            <div style={{ color: '#b1d2e7', fontSize:'30px', marginTop:'15px' }}>Forging the future</div>
          </div>
        </div>
      </div>

      
      <div className='landing_s2'>
        <div className='landing_s2_contents'>
          <div className='landing_s2_item'>
            <h1>Sales Pitch #1</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>

          <div className='landing_s2_item'>
            <h1>Sales Pitch #2</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>

          <div className='landing_s2_item'>
            <h1>Sales Pitch #3</h1>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </div>
        </div>
      </div>

      <div className='landing_s3'>
        <Button variant="contained">Purchase our services Now!</Button>
      </div>

      <Footer/>
    </React.Fragment>
  );
}
