
import EventCountdown from "./components/EventCountDown";

const App = () => {
  const eventDate = "2024-12-31T23:59:59"; // Cambia esta fecha al objetivo del evento

  return (
    <div>
      <EventCountdown targetDate={eventDate} />
    </div>
  );
};

export default App;
