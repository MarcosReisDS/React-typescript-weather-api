import { FC, useContext, useState } from "react";
import ChargeBar from "../../../shared/components/ChargeBar";
import Wsw from "../../../shared/components/Wsw";
import Contexts, { IContext } from "../../../shared/contexts";
import { formatDate } from "../../../shared/helpers/formatDate";
import "./style/index.css";

interface IContentPage { }
const ContentPage: FC<IContentPage> = () => {

    const { contexts, weather } = useContext(Contexts) as IContext
    const [celsius, setCelsius] = useState<boolean>(true)

    return (
        <div className="center-page">
            {!!weather &&
                <>
                    <div className="temperature-buttons">
                        <button className={`degree-button ${celsius && "degree-button-active"}`} onClick={() => { setCelsius(true) }}>℃</button>
                        <button className={`degree-button ${!celsius && "degree-button-active"}`} onClick={() => { setCelsius(false) }}>℉</button>
                    </div>

                    <div className="weather-forecast">
                        {weather?.consolidated_weather?.map((weather, index) => {
                            const minTemp = celsius ? weather.min_temp : weather.min_temp * 32 + 1.8
                            const maxTemp = celsius ? weather.max_temp : weather.max_temp * 32 + 1.8
                            const degreeType = celsius ? "℃" : "℉"
                            const formatedDate = formatDate(weather.applicable_date)
                            if (index !== 0) {
                                return (
                                    <div key={index} className="all">
                                        <h2 className="date-degrees">{formatedDate}</h2>
                                        <div className="img-temp">
                                            <img src={`https://www.metaweather.com/static/img/weather/${weather.weather_state_abbr}.svg`} />
                                        </div>
                                        <div className="c-degrees">
                                            <span>{minTemp.toString().split('.')[0]}{degreeType}</span>
                                            <span>{maxTemp.toString().split('.')[0]}{degreeType}</span>
                                        </div>
                                    </div>
                                )
                            }
                        })}
                    </div>
                    <h1 className="title-highlight">Today`s highlights</h1>
                    <div className="today-highlights">
                        <div className="highlights">
                            <h2 className="name-highlight">wind status</h2>
                            <span className="status-highlight"><strong>{weather.consolidated_weather[0].wind_speed.toString().substring(0, 1)}</strong> mph</span>
                            <div className="wsw-highlight">
                                <span><Wsw windDirection={weather.consolidated_weather[0].wind_direction.toString()} /></span>
                                <span>{weather.consolidated_weather[0].wind_direction_compass}</span>
                            </div>
                        </div>
                        <div className="highlights">
                            <h2 className="name-highlight">Humidity</h2>
                            <span className="status-highlight"><strong>{weather.consolidated_weather[0].humidity}</strong>%</span>
                            <ChargeBar charge={weather.consolidated_weather[0].humidity} />
                        </div>
                        <div className="highlights">
                            <h2 className="name-highlight">Visibility</h2>
                            <span className="status-highlight"><strong>{weather.consolidated_weather[0].visibility.toString().split(".").map((v, index) => index === 1 ? v.substring(0, 1) : v + ',')}</strong> miles</span>
                        </div>
                        <div className="highlights">
                            <h2 className="name-highlight">Air pressure</h2>
                            <span className="status-highlight"><strong>{weather.consolidated_weather[0].air_pressure}</strong> mb</span>
                        </div>
                    </div>
                </>
            }

        </div>
    )
}

export default ContentPage
