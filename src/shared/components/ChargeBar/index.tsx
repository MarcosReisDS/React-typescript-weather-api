import { FC } from "react";
import "./style/index.css"

interface IChargeBar {
    charge: number;
 }
const ChargeBar: FC<IChargeBar> = ({charge}) => {
    return (
        <div className="container-charge-bar">
            <div className="indicators">
                <span>0</span>
                <span>50</span>
                <span>100</span>
            </div>
            <div className="charge-bar">
                <div style={{width: `${charge}%`}}></div>
            </div>
        </div>
    )
}

export default ChargeBar