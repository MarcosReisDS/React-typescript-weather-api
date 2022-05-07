import { FC, useContext } from "react";
import { FiMapPin } from "react-icons/fi"
import { useNavigate } from "react-router";
import Contexts, { IContext } from "../../../shared/contexts";
import "./style/index.css";

interface IMenuLateral { }
const MenuLateral: FC<IMenuLateral> = () => {
    const navigate = useNavigate()

    const { weather, currentLocationWeatherInforms } = useContext(Contexts) as IContext

    const currentDate: string[] = new Date().toDateString().split(" ")

    return (
        <div className="menu-lateral">
            <div className="container-buttons" >
                <button className="search-button" onClick={() => navigate("/search")}>Search for places</button>
                <button className="location-button" onClick={() => currentLocationWeatherInforms()}><FiMapPin /></button>
            </div>
            {!!weather &&
                <>
                    <img className="fig-temperatura" src={`https://www.metaweather.com/static/img/weather/${weather?.consolidated_weather[0]?.weather_state_abbr}.svg`} />
                    <span className="graus">{weather?.consolidated_weather[0]?.the_temp.toString().substring(0, 2)}°C</span>
                    <p className="descricao-graus">{weather.consolidated_weather[0].weather_state_name}</p>
                    <p>Today - {currentDate[0]}, {currentDate[2]} {currentDate[1]}</p>
                    <p><FiMapPin /> {weather.title}</p>
                </>
            }
        </div >

    )
}

export default MenuLateral