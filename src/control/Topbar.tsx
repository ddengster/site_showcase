
import { Language, Settings } from '@mui/icons-material';
import React from 'react'
import './controlpanel.css';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from 'react-router-dom';
import { IProps } from './Sidebar';

export function Topbar(props : IProps) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState<null | SVGSVGElement>(null);
  const [show, showMenu] = React.useState(false);
  

  const toggleSettingsMenu = (event : React.MouseEvent<SVGSVGElement>) => {
    showMenu(!show);
    setAnchorEl(event.currentTarget);
  };
  const closeSettingsMenu = () => {
    showMenu(false);
  };
  const gotoSettingsPage = () => {
    closeSettingsMenu();
    props.setMainCallback({ page: "SETTINGS"});
  };
  const logout = () => {
    closeSettingsMenu();
    sessionStorage.clear();
    navigate('/login');
  };


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
            <Settings style={{zIndex:'0', color:'cyan'}} onClick={toggleSettingsMenu}/>
            <div className='topbar_settings_content'>
              <Menu id="settings_menu" open={show} anchorEl={anchorEl} 
                onClose={closeSettingsMenu} 
                sx={
                  {
                    left:'-40px',
                    textAlign:'right'
                  }}>
                <MenuItem onClick={gotoSettingsPage}>Settings</MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </Menu>
            </div>
          </div>
        </span>
      </div>
    </div>
  );

}