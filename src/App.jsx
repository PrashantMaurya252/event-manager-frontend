import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import MyEvent from "./pages/MyEvent";
import CreateEvent from "./pages/CreateEvent";
import AllEvents from "./pages/AllEvents";
import EventDetails from "./pages/EventDetails";
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Routes>
        {/* <Route path='/' element={<Home/>}/> */}
        <Route path="/auth" element={<Auth />} />
        <Route path="/myevents" element={<MyEvent />} />
        <Route path="/create-event" element={<CreateEvent />} />
        <Route path="/" element={<AllEvents />} />
        <Route path="/event-details/id" element={<EventDetails />} />
      </Routes>
    </div>
  );
}

export default App;
