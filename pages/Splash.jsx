import gameLogo from "../src/assets/logo.jpg";
import "../src/css/Splash.css";
import "../src/css/particle.css";

export default Splash;

function Splash() {
  let timeLeft = 2;
  setInterval(() => {
    document.getElementById("countdown").innerHTML = timeLeft;
    timeLeft -= 1;
    if (timeLeft < 0) {
      timeLeft = 0;
    }
  }, 1000);

  return (
    <>
      <div id="countdown" className="countdown"> 3 </div>
      <div id="particle_container">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>
      <div>
        <img src={gameLogo} className="logo" alt="Game logo" />
      </div>
      <div>
        <meta http-equiv="refresh" content="3;url=/onboarding" />
      </div>
    </>
  );
}
