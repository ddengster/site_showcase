
import { Language, Settings } from '@mui/icons-material';
import React from 'react'
import './controlpanel.css';
import NotificationsIcon from '@mui/icons-material/Notifications';

export function Topbar() {

  return (
    <div className='topbar'>
      <div className='topbar_wrapper'>
        <span style={{fontSize:'20px', fontWeight:'700', color:'cyan'}}>Control Panel</span>

        <span className='topbar_icon_wrapper'>
          <div className='topbar_icon_item' style={{ paddingRight:'-5px'}}>
            <NotificationsIcon style={{zIndex:'0', color:'cyan'}}/>
            <span className='topbar_notifications_icon_badge'>2</span>
          </div>
          <div className='topbar_icon_item'>
            <Language style={{zIndex:'0', color:'cyan'}}/>
          </div>
          <div className='topbar_icon_item'>
            <Settings style={{zIndex:'0', color:'cyan'}}/>
          </div>
        </span>
      </div>
    </div>
  );

}