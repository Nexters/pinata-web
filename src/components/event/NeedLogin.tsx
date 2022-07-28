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
  background-image: url(${require('../../assets/image/need-login-background.png')});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const Text = styled.div`
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 800;
  font-size: 30px;
  line-height: 43px;

  text-align: center;

  color: #ffffff;
`;

const LoginButton = styled.button`
  margin-top: 30px;

  width: 180px;
  height: 50px;

  background: #f6e24b;
  border-radius: 50px;
  border: none;

  transition: 0.5s;

  font-family: 'Pretendard';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 19px;
  text-align: center;

  color: #1B1B1E;
  :hover {
    background: #fff;
  }
`;

const NeedLogin: React.FC = () => {
    return (
        <Wrapper>
            <Text>
                이벤트에 참여하기 위해<br />
                로그인이 필요합니다.
            </Text>
            <LoginButton>카카오로 로그인</LoginButton>
        </Wrapper>
    );
};

export default NeedLogin;