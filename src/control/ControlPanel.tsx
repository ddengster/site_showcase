
import React, { useState } from 'react';
import { Topbar } from './Topbar';
import { Sidebar } from './Sidebar';
import { Home } from './pages/Home';
import { Analytics } from './pages/Analytics';
import { Users } from './pages/Users';
import { Servers } from './pages/Servers';
import { Settings } from './pages/Settings';

import { isExpired } from "react-jwt";

export default function ControlPanel() {
  const [mainpage, setMainPage] = useState({ page: "HOME"});

  //@todo: replace with some kind of token checking

  if (sessionStorage["token"] == null || (sessionStorage["token"] && isExpired(sessionStorage["token"]))) {
    return (
      <React.Fragment>
        DENIED, REDIRECTING..
        <meta http-equiv="Refresh" content="0; url='http://localhost:3000/login'" />
      </React.Fragment>
    );
  }

  function get_contents(p : string) {
    
    if (p === "ANALYTICS")
      return (<Analytics/>);
    else if (p === "SERVERS")
      return (<Servers/>);
    else if (p === "USERS")
      return (<Users/>);
    else if (p === "ANALYTICS")
      return (<Analytics/>);
    else if (p === "SETTINGS")
      return (<Settings/>);
    else
      return (<Home/>);
  }

  return(
    <React.Fragment>
        <Topbar setMainCallback={setMainPage}/>
        <div className='sidebar_main_content_wrapper'>
          <div className='sidebar_item'><Sidebar setMainCallback={setMainPage}/></div>

          <div className='main_content_item'>
            { get_contents(mainpage.page) }
          </div>
        </div>
    </React.Fragment>);
      
}
