import './Splash.css';
import background from "../../assets/splash-bg.jpeg";
import planOption1 from "../../assets/plan-option-1.png";
import planOption2 from "../../assets/plan-option-2.png";

function Splash() {
    return (
        <div className="main Splash">
            <img className="background" src={background} alt="" />
            <div className="page">
                <div className="navbar">
                    <button className="secondary-button">LOG IN</button>
                </div>
                <section className="stream-more">
                    <div className="content">
                        <div>
                            <h1>Stream more of what you love</h1>
                            <h4>Choose a Disney Bundle: Duo with all the best Disney+ and
                                Hulu titles, or Trio including epic sports from ESPN+</h4>
                        </div>
                        <div className="plan-options">
                            <div className="plan-option">
                                <img src={planOption1} alt="" />
                                <h5>Starting at <b>$9.99</b>/month</h5>
                                <button className="primary-button">GET DUO</button>
                            </div>
                            <div className="plan-option">
                                <img src={planOption2} alt="" />
                                <h5>Starting at <b>$14.99</b>/month</h5>
                                <button className="primary-button">GET DUO</button>
                            </div>
                        </div>
                        <div>
                            <p>U.S. residents, 18+ only. Offer valid for eligible
                                subscribers only. Select Hulu content available via
                                Disney+ with valid Hulu and Disney+ subscriptions;
                                additional content only available via Hulu app. ©
                                2024 Disney and its related entities. <a href="https://www.disneyplus.com/#modal-bundle-terms-apply-hulk">Additional terms
                                    apply</a>.</p>
                        </div>
                        <div>
                            <h6>All of these and more now streaming on Disney+, Hulu,
                                and ESPN+ with the Disney Bundle.</h6>
                        </div>
                        <div className="view-all-plan-options">
                            <a href="https://www.disneyplus.com/#us-plan-comp">
                                View All Plan Options
                            </a>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Splash;