import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { LoginContext } from '../contexts/AuthContext';
import { useRouter } from 'next/router';
import { successMsg } from '../components/shared/toaster-msg/error-msg';
import { LoginContextTye } from '../types/auth';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
export default function UserDetail() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  const { logOut } = React.useContext(LoginContext) as LoginContextTye;
  const route = useRouter()
  const authValue = JSON.parse(localStorage.getItem('userDetailsStorage') || '{}');
  const SignOut =()=> {
      route.push('/')
    logOut();
    successMsg('you are successfully logout')
  }

  return (
    <div>
      <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
       style={{color:'white'}}
      >
        {authValue?.email}  <ArrowDropDownIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>My Account</MenuItem>
        <MenuItem onClick={SignOut}>Logout</MenuItem>
      </Menu>
    </div>
  );
}