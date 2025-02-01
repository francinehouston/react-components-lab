// src/components/WeatherData.jsx
const WeatherData = ({day,conditons,time}) => {

return (
    <div className="weather-data">
        <h2>{day}</h2>
        <p>
            <span>Conditons: </span>{conditons}
        </p>
        <span> Time: </span>{time}
    </div>
);
};

export default WeatherData;