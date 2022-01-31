import React from 'react';
import { Link } from 'react-router-dom';
import './landing.css'
import Button from '@mui/material/Button';

export default function Header() {
  return(
    <div className='landing_header'>

      <div className='landing_header_contents'>

        <Link to='/'>
          <div className='landing_header_logo'>
            <img src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K"
              height="20" className='landing_header_logo_img' />
            <span className='landing_header_logo_text'>CompanyX</span>
          </div>
        </Link>

        <div className='landing_header_links'>
          <Link to='/about'>About</Link>
          <Link to='/about'>Page1</Link>
          <Link to='/about'>Page2</Link>
          <Link to='/about'>Services</Link>
        </div>

        <Link to='/login'>
          <Button variant="contained" className='landing_login'>Dashboard Login</Button>
        </Link>
          
      </div>

    </div>
  );
}
