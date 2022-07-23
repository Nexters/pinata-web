import React, { ReactNode } from 'react';

import styled from 'styled-components';

const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #aaa;

  display: flex;
  justify-content: center;

  padding: 0;
  margin: 0;
`;

const MobileScreen = styled.div`
  width: 480px;
  height: 100%;

  background: #fff;
`;

type Props = {
  children?: ReactNode;
};

export const MobileWrapper: React.FC<Props> = ({ children }) => {
    return (
        <Wrapper>
            <MobileScreen>{children}</MobileScreen>
        </Wrapper>
    );
};
