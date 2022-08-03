import { Box, Center, Grid, GridItem, Image, Code } from "@chakra-ui/react";
import React from "react";
import img from ".././assets/bgHero.jpg";
import "./Collage.css";
const Collage = () => {
  return (
    <>
      <div className="drybn-collage">
        <div className="drybn-collage__overlay">
          <div className="drybn-collage__content">
            <div className="drybn-collage-item">
              
                <Code m={[4, 12, 20, 40]} color="black" bg={"white"}>
                  Digital Videos
                </Code>{" "}
              
            </div>
            <div className="drybn-collage-item">
              <Code m={[4, 12, 20, 40]} color="black" bg={"white"}>
                Social Impact Films
              </Code>{" "}
            </div>
            <div className="drybn-collage-item">
           
                <Code  m={[4, 12, 20, 40]} color="black" bg={"white"}>
                  {" "}
                  Branded Content
                </Code>
            
            </div>
            <div className="drybn-collage-item drybn-collage-item--heading">
              <h2>
                Nimbu
                <br />
                <span>Soda</span>
              </h2>
            </div>
            <div className="drybn-collage-item">
              
                <Code m={[4, 12, 20, 40]} color="black" bg={"white"}>
                  {" "}
                  Animated Videos
                </Code>
            
            </div>
            <div className="drybn-collage-item">
              <div style={{ margin: "100px", color: "black" }}>
                <Code color="black" bg={"white"}>
                  TVCs
                </Code>{" "}
              </div>{" "}
            </div>
            <div className="drybn-collage-item">
             
                <Code color="black" bg={"white"}  m={[6, 8, 16, 20]} ml={[2,10]}>
                  Documentries
                </Code>{" "}
              
            </div>
            <div className="drybn-collage-item">
              <Code color="black" bg={"white"} m={[14, 20, 40]} ml={[4,8,10]} mt={[40,40]}>
                Corporate Films
              </Code>{" "}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collage;
