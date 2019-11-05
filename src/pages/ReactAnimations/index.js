/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import styled, { keyframes } from "styled-components";
import * as reactAni from "react-animations";
import Item from "./item";
import "./style.css";

function ReactAnimations() {
  const [animationName, setAnimationName] = useState("bounce");
  const Anim = styled.div`
    animation: 2s ${keyframes`${reactAni[animationName]}`} infinite;
  `;
  return (
    <>
      <div className="wrapper-react-animations">
        <Anim>
          <Item name={animationName} />
        </Anim>
        <select
          className="animation-name"
          value={animationName}
          onChange={e => setAnimationName(e.target.value)}
        >
          {Object.keys(reactAni).map(k => (
            <option value={k}>{k}</option>
          ))}
        </select>
      </div>
    </>
  );
}

export default ReactAnimations;
