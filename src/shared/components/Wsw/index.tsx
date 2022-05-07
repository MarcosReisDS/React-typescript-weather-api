import { FC } from 'react'
import "./style/index.css"

interface IWsw { windDirection: string }
const Wsw: FC<IWsw> = ({ windDirection }) => {
    return (
        <div className="background">
            <div className="arrow" style={{ transform: `rotate(${windDirection}deg)` }}></div>
        </div>
    )
}

export default Wsw