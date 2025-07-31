import './no.css'
import React from 'react';
import { Box, Typography, Link } from '@mui/material';
export default function NOSTUDENT() {
  return (
     <Box>
      <Box className="artboard">
        <Box className="circle">
          <Box className="base" />
        </Box>

        <Box className="table">
          <Box className="table-base" />
          <Box className="leg-right">
            <Box className="leg-right-shadow" />
          </Box>
          <Box className="leg-left">
            <Box className="leg-left-shadow" />
          </Box>
          <Box className="cupboard">
            <Box className="cupboard-front">
              <Box className="cupboard-front-shadow" />
              <Box className="handle-one">
                <Box className="handle-one-exshadow" />
                <Box className="handle-one-exshadow2" />
              </Box>
              <Box className="handle-two">
                <Box className="handle-two-exshadow" />
              </Box>
            </Box>
            <Box className="leg-one" />
            <Box className="leg-two" />
            <Box className="leg-three" />
            <Box className="side-shadow" />
          </Box>
        </Box>

        <Box className="paper">
          {[1, 2, 3, 4, 5].map((n) => (
            <Box key={n} className={`paper${n}`}>
              {[...Array(6)].map((_, i) => (
                <Box key={i} className={`p${n}-line${i + 1}`} />
              ))}
            </Box>
          ))}
        </Box>

        <Box className="poster">
          <Box className="poster-circle1" />
        </Box>

        <Box className="speaker">
          <Box className="handle" />
          <Box className="speaker-border" />
          <Box className="base-lightblue" />
          <Box className="base-components" />
          <Box className="shadow" />
        </Box>

        <Box className="lamp">
          <Box className="base1" />
          <Box className="base2" />
          <Box className="stand-shadow" />
          <Box className="stand-shadow1" />
          <Box className="stand1-shadow" />
          <Box className="stand1-shadow1" />
          <Box className="stand2-shadow" />
          <Box className="stand2-shadow2" />
          <Box className="semitop-right" />
          <Box className="semibot-right" />
          <Box className="circle-right" />
          <Box className="circleplus" />
          <Box className="middle" />
          <Box className="semitop-left" />
          <Box className="semibot-left" />
          <Box className="stand2-shadowtop" />
          <Box className="stand2-shadowtop-right" />
          <Box className="headbar" />
          <Box className="head-cone" />
          <Box className="head-shade" />
        </Box>

        <Box className="plane1">
          <Box className="obj1" />
          <Box className="obj2" />
          <Box className="obj3" />
          <Box className="obj4" />
        </Box>

        <Box className="plane2">
          <Box className="p2-obj1" />
          <Box className="p2-obj2" />
          <Box className="p2-obj3" />
        </Box>

        <Box className="plane3">
          <Box className="p3-obj1" />
          <Box className="p3-obj2" />
          <Box className="p3-obj3" />
        </Box>
      </Box>

      <Typography variant="body2" align="center" fontFamily="Roboto Mono" fontSize={20} mt={2}>
        Original Illustration by{' '}
        <Link
          href="https://dribbble.com/shots/2770525-Empty-State-Illustration-Part-3"
          target="_blank"
          rel="noopener"
        >
          Derrick Ligon for IBM
        </Link>
      </Typography>
    </Box>
  );
};

