
import "../../assets/styles/App.css"
import * as React from 'react';
import {YouTube, Email }from '@mui/icons-material';
import { AppBar, Button } from "@mui/material";

export default function Footer() {
 

  return (
    <>
    <AppBar className="footerContainer" >
    <div className="footerText">
      Nadya Poklad
    </div>
    <div className="footerIcons">
          <Button variant="">
            <YouTube />
          </Button>
          <Button variant="">
            <Email />
          </Button>
      
    </div>
   
      <div className='registerBy'>
       Design by Araceli Catalano & Alba Morán   <br/>
      © Nadya Podlak
      </div>

      </AppBar>
  </>
  );
}