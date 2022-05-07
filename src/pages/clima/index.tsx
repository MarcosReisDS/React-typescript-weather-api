import { FC, useContext } from "react";
import Router from "../../Router";
import Loader from "../../shared/components/Loader";
import Contexts, { IContext } from "../../shared/contexts";
import ContentPage from "./ContentPage";

interface IClima { }
const Clima: FC<IClima> = () => {
    const { contexts } = useContext(Contexts) as IContext
    return (
        <>
            {contexts.loader.show && <Loader />}
            <Router />
            <ContentPage />
        </>
    )
}

export default Clima