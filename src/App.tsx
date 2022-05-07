import { FC, useEffect, useState } from "react";
import "./App.css"
import api from "./shared/api";
import Contexts, { IGeneralContext } from "./shared/contexts";
import Clima from "./pages/clima";
import { IWeather } from "./shared/types";

interface IApp { }
const App: FC<IApp> = () => {

  const [contexts, setContexts] = useState<IGeneralContext>({
    session: {
      user: {
        name: 'Marcos'
      }
    },
    loader: {
      show: false
    }
  })

  const [weather, setWeather] = useState<IWeather | null>(null)

  const startLoader = () => {
    setContexts({
      ...contexts,
      loader: {
        ...contexts.loader,
        show: true
      }
    })
  }

  const stopLoader = () => {
    setContexts({
      ...contexts,
      loader: {
        ...contexts.loader,
        show: false
      }
    })
  }

  const handleSetWeather = (newWeather: IWeather) => {
    setWeather(newWeather)
  }

  const currentLocationWeatherInforms = () => {
    navigator.geolocation.getCurrentPosition(function (position) {
      const lat: string = position.coords.latitude.toString();
      const long: string = position.coords.longitude.toString();

      api.get({
        property: 'search-lat-long',
        query: {
          lat: lat, long: long
        }
      }).then((res) => {
        api.get({
          property: 'location',
          query: {
            woeid: res.data[0].woeid.toString()
          }
        }).then((response) => {
          handleSetWeather(response.data)
        })
      })
        .catch((error) => {
          console.log(error)
        })
        .finally(() => {
          stopLoader()
        })
    })
  }

  useEffect(() => {
    startLoader()
    currentLocationWeatherInforms()
  }, [])

  return (
    <Contexts.Provider value={{ contexts, weather, setContexts, startLoader, stopLoader, currentLocationWeatherInforms, handleSetWeather }}>
      <div className="container">
        <Clima />
      </div>
    </Contexts.Provider>
  )
}

export default App