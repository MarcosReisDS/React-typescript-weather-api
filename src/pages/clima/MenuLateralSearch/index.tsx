import { FC, useContext, useState } from "react";
import { useNavigate } from "react-router";
import api from "../../../shared/api";
import Contexts, { IContext } from "../../../shared/contexts";
import { IWatherSearch } from "../../../shared/types";
import "./style/index.css";
import { AiOutlineClose } from "react-icons/ai"

interface IMenuLateralSearch { }
const MenuLateralSearch: FC<IMenuLateralSearch> = () => {
    const navigate = useNavigate()
    const { contexts, setContexts, startLoader, stopLoader, handleSetWeather } = useContext(Contexts) as IContext
    const [city, setCity] = useState<string>("")
    const [listCitys, setListCitys] = useState<IWatherSearch[]>([])

    const getCity = () => {
        startLoader()
        api.get({
            property: "search-city-name",
            query: { city: city }
        }).then(res => {
            setListCitys(res.data)
        }).catch(err => {
            console.log(err)
        }).finally(() => {
            stopLoader()
        })
    }

    const selectCity = (woeid: string) => {
        startLoader()
        api.get({
            property: "location",
            query: { woeid: woeid }
        }).then((res) => {
            handleSetWeather(res.data)
            navigate("/")
        }).finally(() => {
            stopLoader()
        })
    }

    return (
        <div className="menu-lateral menu-lateral-search">
            <div className="close">
                <AiOutlineClose size="20" onClick={() => navigate("/")} />
            </div>
            <div className="search-container">
                <input className="search" type="text" onKeyUp={(e) => e.keyCode === 13 && getCity()} onChange={(e) => setCity(e.target.value)} />
                <button className="button-search" onClick={getCity}>Search</button>
            </div>

            <div className="search-options">
                {listCitys.map((city) => {
                    return (
                        <>
                            <div onClick={() => selectCity(city.woeid.toString())}>
                                {city.title}
                            </div>
                        </>
                    )
                })}
            </div>
        </div>

    )
}

export default MenuLateralSearch