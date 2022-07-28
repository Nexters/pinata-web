import React, { useMemo } from 'react';
import styled from 'styled-components';

import EventWrapper from 'components/event/EventWrapper';

import { useInterval } from 'util/useInterval';
import { Event } from 'types/Event';

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
    const leftTimeSeconds = useMemo(()=>{
    // waiting 상황이므로 now < openAt 인 상황
        const now = new Date();
        const startAt = new Date(event.openAt)

        // const diffMs = startAt - now; // ms
        // const diff = Math.ceil(diffMs / 1000);
        // return diff

        return 10000;
    },[event]);

    const hours = Math.ceil(leftTimeSeconds / (60 * 60))
    const minutes = Math.ceil((leftTimeSeconds % (60 * 60)) / 60)
    const seconds = Math.ceil(leftTimeSeconds % (60 * 60 * 60));

    return (
        <EventWrapper>
            <Timer>{`${hours}:${minutes}:${seconds}`}</Timer>
            <Instruction>
        넥스터즈 21기 깜짝 선물 3분께 드립니다.
                <br />
        이벤트 추첨이 곧 시작됩니다.
            </Instruction>
        </EventWrapper>
    );
};

export default Waiting;
