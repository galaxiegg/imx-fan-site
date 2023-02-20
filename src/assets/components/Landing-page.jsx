import React from 'react'
import './Landing-page.css'

const LandingPage = () => {
  
    return (

            <div className="landing-page-container">
                                
                <div className='imx-image-container'>
                    <a href="https://www.immutable.com/" target="_blank">
                    <img src="images/immutableX-logo-horiz-noreg-WHT-RGB 222x48px.svg" className="imx-logo" alt="imx logo" />
                    </a>
                </div>

                <div className='imx-game-logo angelic'>
                    <a href="https://linktr.ee/angelicgame" target="_blank">
                    <img src="images/game-logos/angelic.jpg" className="game-logo" alt="angelic logo" />
                    </a>
                    <p>Angelic</p>
                </div>

                <div className='imx-game-logo momoguro'>
                    <a href="https://linktr.ee/momoguro" target="_blank">
                    <img src="images/game-logos/momoguro.jpg" className="game-logo" alt="momoguro logo" />
                    </a>
                    <p>Momoguro</p>
                </div>

            </div> /* End of container */

    );
  };
  
  export default LandingPage;
