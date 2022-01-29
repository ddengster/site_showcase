import React from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
  return(
    <footer className='landing_footer'>

      <div className='landing_footer_inner'>
        <div className='landing_footer_info'>
          <h2 style={{lineHeight:'0'}}>CompanyX</h2>
          <p>CompanyX is a company that does XYZ. We have served as many as 1k customers since the 2020s, and received 2000+ 5 star reviews from our clients.</p>

          <br/>
          <p>Contact us at:</p>
          <p>
            123 ABC Road, Country 123123<br/>
            email@companyx.com<br/>
            +651111111<br/>
          </p>
        </div>

        <div className='landing_footer_products'>
          <h2 style={{lineHeight:'0'}}>Products</h2>
          <Link to='/about'><p>Product1</p></Link>
          <Link to='/about'><p>Product2</p></Link>
        </div>
        <div className='landing_footer_company'>
        <h2 style={{lineHeight:'0'}}>Company</h2>
          <Link to='/about'><p>About</p></Link>
        </div>
        <div className='landing_footer_support'>
          <h2 style={{lineHeight:'0'}}>Support</h2>
          <Link to='/about'><p>FAQ</p></Link>
        </div>
      </div>
      
    </footer>
  );
}
