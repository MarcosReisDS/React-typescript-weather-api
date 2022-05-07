import { RingLoader } from 'react-spinners'
import './style/index.css'

const Loader = () => {
    return (
        <div className="container-loader">
            <RingLoader color="white"/>
        </div>
    )
}

export default Loader