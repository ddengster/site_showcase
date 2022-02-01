

import './controlpanel.css'
import List from '@mui/material/List';
import { listItemClasses } from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText'; 
import { ListItemButton } from '@mui/material';

const list_style = {
  paddingLeft: '2%',

  bgcolor: 'rgb(38, 38, 38)',
  color: 'azure',
  [`& .active, & .${listItemClasses.root}:hover`]: {
    backgroundColor: "gray",
    fontWeight: "bold",
    "& svg": {
      fill: "gray"
    },
  }
};

export interface IProps {
  setMainCallback: React.Dispatch<React.SetStateAction<{page: string}>>;
}

export function Sidebar(props : IProps) {

  var handleClick = (content : string) => {
    console.log(content);
    props.setMainCallback({ page: content });
  };
  
  return (
    <div className='sidebar_wrapper'>
      <div className='sidebar_wrapper_flex'>
        
        <List sx={list_style}>
          <div style={{ fontSize:'20px'}}>System</div>
          <ListItemButton onClick={ () => { handleClick("HOME"); }}>
            <ListItemText primary="Home" sx={{fontSize:"20px"}}/>
          </ListItemButton>
          <ListItemButton onClick={ () => { handleClick("SERVERS"); }}>
            <ListItemText primary="Servers" sx={{fontSize:"20px"}}/>
          </ListItemButton>
          <ListItemButton onClick={ () => { handleClick("USERS"); }}>
            <ListItemText primary="Users"/>
          </ListItemButton>
          <ListItemButton onClick={ () => { handleClick("ANALYTICS"); }}>
            <ListItemText primary="Analytics"/>
          </ListItemButton>

          <div style={{ fontSize:'20px'}}>Admin</div>
          <ListItemButton onClick={ () => { handleClick("SETTINGS"); }}>
            <ListItemText primary="Settings" sx={{fontSize:"20px"}} />
          </ListItemButton>
        </List>
      </div>
    </div>
    
  )
}