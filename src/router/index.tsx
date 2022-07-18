import { BrowserRouter, Route, Routes } from "react-router-dom";

import Main from "pages/Main";
import Event from "pages/Event";
import EventLists from "pages/EventLists";
import CreateEvent from "pages/CreateEvent";
import Gifts from "pages/Gifts";

export const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/event" element={<Event />} />
        <Route path="/events" element={<EventLists />} />
        <Route path="/create_event" element={<CreateEvent />} />
        <Route path="/gifts" element={<Gifts />} />
      </Routes>
    </BrowserRouter>
  );
};
