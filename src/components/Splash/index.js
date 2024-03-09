import './Splash.css';
import background from "../../assets/splash-bg.jpeg";

function Splash() {
    return (
        <div className="main Splash">
            <img className="background" src={background} alt="" />
            <div className="page">
                <div className="navbar">
                    <button className="secondary-button">LOG IN</button>
                </div>
            </div>
        </div>
    );
};

export default Splash;