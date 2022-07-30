import React, { useEffect, useMemo, useState } from 'react';
import styled from 'styled-components';

import EventWrapper from '$components/event/EventWrapper';

import { useInterval } from '$hooks/useInterval';
import { Event } from '$types/Event';
import {changeSecondsHHMMSS} from '$util/time'

const Timer = styled.div`
  font-family: "Pretendard";
  font-style: bold;
  font-weight: 800;
  font-size: 59px;
  line-height: 26px;
  height: 45px;
  color: #ffffff;
`;

const Instruction = styled.div`
  margin-top: 28;
  font-family: "Pretendard";
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  /* or 162% */

  text-align: center;
  letter-spacing: -0.333333px;

  color: #ffffff;
`;

type Props = {
  event: Event
}

const Waiting: React.FC<Props> = ({ event }) => {
    const [leftSeconds, setLeftSeconds] = useState<number>(0)
    useEffect(() => {
        setLeftSeconds(60 * 60 * 3)
    }, [event])

    useInterval(()=>{
        setLeftSeconds((before) => before - 1)
    }, 1000)

    return (
        <EventWrapper>
            <Timer>{changeSecondsHHMMSS(leftSeconds)}</Timer>
            <Instruction>
                넥스터즈 21기 깜짝 선물 3분께 드립니다.
                <br />
                이벤트 추첨이 곧 시작됩니다.
            </Instruction>
        </EventWrapper>
    )
};

export default Waiting;
