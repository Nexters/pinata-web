import React, { useState } from "react";

import styled from "styled-components";

const Wrapper = styled.div`
  position: absolute;
  width: 100%;
  height: 60px;
  left: 0px;
  top: 44px;

  display: flex;
  justify-content: center;
  align-items: center;

  background: #ffffffff;
`;

const Menu = styled.button`
  width: 30px;
  height: 30px;

  border: none;
`;

const Logo = styled.div`
  width: 100px;
  height: 30px;
`;

export const HeaderMenu = () => {
  return (
    <Wrapper>
      <Logo />
      <Menu />
    </Wrapper>
  );
};
