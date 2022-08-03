import { Box, Center, Grid, GridItem, Image } from "@chakra-ui/react";
import React from "react";
import img from ".././assets/bgHero.jpg";
import "./Collage.css"
const Collage = () => {
  return (
    <>
<div className="drybn-collage">
  <div className="drybn-collage__overlay">
    <div className="drybn-collage__content">
      <div className="drybn-collage-item">
       <div style={{"margin":"100px","color":"black"}}>
          Digital Videos</div> 
        </div>
      <div className="drybn-collage-item"><div style={{"margin":"100px","color":"black"}}>Social Impact Films</div> </div>
      <div className="drybn-collage-item"><div style={{"margin":"100px","color":"black"}}>Branded Content</div> </div>
      <div className="drybn-collage-item drybn-collage-item--heading">
        <h2>Nimbu<br/><span>Soda</span></h2>
      </div>
      <div className="drybn-collage-item"><div style={{"margin":"100px","color":"black"}}>Animated Videos</div> </div>
      <div className="drybn-collage-item"><div style={{"margin":"100px","color":"black"}}>TVCs</div> </div>
      <div className="drybn-collage-item"><div style={{"margin":"100px","color":"black"}}>Documentries</div> </div>
      <div className="drybn-collage-item"><div style={{"margin":"120px","color":"black"}}>Corporate Films</div> </div>
    </div>
  </div>
</div>
    </>
  );
};

export default Collage;
