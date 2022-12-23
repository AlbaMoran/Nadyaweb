
import "../../assets/styles/App.css"
import * as React from 'react';
import {YouTube, Email }from '@mui/icons-material';
import { AppBar, Button } from "@mui/material";

export default function Footer() {
 

  return (
    <>
    <AppBar className="footerContainer" position="fixed" color="primary" sx={{ top: 'auto', bottom: 0 }} >
    <div className="footerText">
      Nadya Poklad
    </div>
    

      </AppBar>
  </>
  );
}