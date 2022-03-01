export default function WeatherWidget(props) {
    const {city, icon, celsius, unit} = props
    return (
    <div>
        <h1>WeatherW in {city}
        <span>{icon}</span>
        </h1>
        <h2>
            {celsius} °{unit}
        </h2>
    </div>
    );
  }
  