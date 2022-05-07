import { createContext, Dispatch, SetStateAction } from "react"
import { IWeather } from "../types";

interface ISession {
    user: {
        name: string
    }
}

interface ILoader {
    show: boolean;
}

export interface IGeneralContext {
    session: ISession
    loader: ILoader;
}

export interface IContext {
    contexts: IGeneralContext
    weather: IWeather | null
    setContexts: Dispatch<SetStateAction<IGeneralContext>>
    startLoader: () => void
    stopLoader: () => void
    currentLocationWeatherInforms: () => void
    handleSetWeather: (weather: IWeather) => void
}

const Contexts = createContext<IContext | {}>({});

export default Contexts;