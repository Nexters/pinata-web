import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  height: 100%;
  width: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-color: #32aaff;
  background-image: url(${require('$assets/image/need-login-background.png')});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const HeaderLogo = styled.div`
  width:100%;
  top: 0;
  position:absolute;
  height:60px;

  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`

const LogoImage = styled.div`
  width: 20px;
  height: 20px;

  background: #FFFFFF;
  border-radius: 5px;
`

const LogoText = styled.div`
  font-family: 'Pretendard';
  font-style: normal;
  font-weight: bold;
  font-size: 20px;
  line-height: 20px;
  
  color:#FFFFFF;
`

type Props = {
  hasLogo?:boolean
  children:React.ReactNode
}

const EventWrapper: React.FC<Props> = ({children, hasLogo = true}) => {
    return (
        <Wrapper>
            {hasLogo && 
              (<HeaderLogo>
                  <LogoImage/>
                  <LogoText>pinata</LogoText>
              </HeaderLogo>)}
            {children}
        </Wrapper>
    );
};

export default EventWrapper;
