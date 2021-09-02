import React from 'react';
import {Menu} from 'semantic-ui-react';
import {Link} from '../routes';
const header =()=>{
   return(
       <Menu style={{marginTop:'20px',fontSize:'14px',backgroundColor:"#e9f5f8"}}>
           <Link route="/">
             <a className="item"><div style={{fontSize:"32px",fontWeight:"600",color:"#1C39BB",fontFamily:"cursive"}}><i class="big chess queen icon"></i> Crowd</div><div style={{fontSize:"32px",
             fontWeight:"600",
             color:"#1E90FF",
             fontFamily:"cursive",
             display:"inline",
             marginBottom:"5px"}}>Fund</div></a>
           </Link>
           <Menu.Menu position="right">
           <Link route="/">
             <a className="item" style={{fontSize:"20px",fontFamily:"cursive"}}>A Decentralised Fundraiser App...</a>
           </Link>
           <Link route="/campaign/new">
             <a className="item" style={{fontSize:"20px"}}>+</a>
           </Link>
           
            </Menu.Menu>
       </Menu>
   )
}
export default header;