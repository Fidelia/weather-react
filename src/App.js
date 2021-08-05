import "./App.css";
import WeatherSearch from "./WeatherSearch";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <div className="container">
        <WeatherSearch defaultCity="London" />
        <Forecast />
      </div>
      <footer>
        <a
          href=" https://github.com/Fidelia/weather-react"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>{" "}
        by Fidelia Okandze
      </footer>
    </div>
  );
}

export default App;
