import bodyStyles from './Body.module.css';
import Map from './Map';
import Info from './Info';

function Body () {

    return (
        <div className={bodyStyles.Body}>
            <Map />
            <Info />
        </div>
    )
}

export default Body;