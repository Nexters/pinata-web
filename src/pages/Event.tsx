import React, { useEffect, useState } from 'react';

import NeedLogin from 'components/event/NeedLogin';
import Waiting from 'components/event/Waiting';

import { getEvent } from 'fetchs/getEvent';

import { Event } from 'types/Event';

const EventPage: React.FC = () => {
    const isLoggined = true;
    const [event, setEvent] = useState<Event>();

    // 여기서 이벤트 정보 호출후 상태 만듬
    useEffect(() => {
        getEvent('123').then((event:Event)=>{
            setEvent(event)
        })
    },[])

    if (!isLoggined) {
        return <NeedLogin />;
    }

    if (event && event.status === 'wait') {
        return <Waiting event={event} />;
    }

    return (
        <div className="App">
            <h1>Event Page</h1>
        </div>
    );
};

export default EventPage;
