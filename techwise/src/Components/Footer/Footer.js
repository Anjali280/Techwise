import React from 'react'

const Footer = () => {
  return (
    <div>
        <div>
       <img src="https://static.wixstatic.com/media/90205e_87e481f639d34f178771e4a2a5c98acd~mv2.png/v1/fill/w_124,h_114,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/IND.png" alt="pic" />&nbsp;&nbsp;&nbsp;
       <img src="https://static.wixstatic.com/media/90205e_848a3d996d5341afb72d28c10391c71c~mv2.png/v1/fill/w_124,h_128,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/NZ.png"  alt="pic"/>&nbsp;&nbsp;&nbsp;
       <img src="https://static.wixstatic.com/media/90205e_0766893fa6aa47ff9a564f25c30b4a97~mv2.png/v1/fill/w_116,h_114,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/AUS.png"  alt="pic"/>&nbsp;&nbsp;&nbsp;
       <img src="https://static.wixstatic.com/media/90205e_ee4037118ece48968c1344497a4d3b1e~mv2.png/v1/fill/w_115,h_114,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/CAL.png"  alt="pic"/>
        </div>

        <div style={{display:"flex"  ,justifyContent:"space-around" ,alignItems:"center" ,width:"40%" , fontWeight:"bold" , fontSize:"20px" , padding:"20px",marginLeft:"390px"}}>
            <div>PRIVACY POLICY</div>
            <div>SERVICES</div>
            <div>CONTACT US</div>
            <div>CAREERS</div>
        </div>
        <div style={{padding:"30px"}}> <em>Head Office – Level 21, 191 Queen Street, Auckland 1010, New Zealand</em></div>
        <div style={{padding:"10px" , backgroundColor:"#E8E8E8"}}>©2022 by Techwise Consultancy Limited.</div>
    </div>
  )
}

export default Footer;