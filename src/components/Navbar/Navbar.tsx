import {AppBar, IconButton, Toolbar, Typography} from '@mui/material';
import React from 'react';
import {CustomDialog} from '../CustomDialog';
import {FavoriteTable} from './FavoriteTable';
import FavoriteIcon from '@mui/icons-material/Favorite';
import {dialogOpenSubject$} from '../CustomDialog/CustomDialog';
import styled from "styled-components";

const StyledToolbar = styled(Toolbar)`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  
  /* on xs devices, the toolbar will be displayed in a column */
  @media (max-width: 480px) {
    flex-flow: column wrap;
    justify-content: center;
  }
`;

const Navbar: React.FC = () => {
  const handleClick = () => {
    dialogOpenSubject$.setSubject = true;
  };

  return (
    <>
      <CustomDialog>
        <FavoriteTable/>
      </CustomDialog>
      <AppBar position="sticky">
        <StyledToolbar>
          <Typography variant="h6" component="div">
            Gentleman Programming React TEST
          </Typography>
          <IconButton color="secondary" aria-label="favorites" onClick={handleClick}>
            <FavoriteIcon/>
          </IconButton>
        </StyledToolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
