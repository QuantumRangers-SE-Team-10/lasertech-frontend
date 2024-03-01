import gameLogo from "../src/assets/logo.jpg";
import splashStyling from "../src/css/splash.module.css";
import particleStyling from "../src/css/particle.module.css";

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
      <div id="countdown" className={splashStyling.countdown}> 3 </div>
      <div id="particle-container">
        <div className={particleStyling.particle}></div>
        <div className={particleStyling.particle}></div>
        <div className={particleStyling.particle}></div>
        <div className={particleStyling.particle}></div>
        <div className={particleStyling.particle}></div>
        <div className={particleStyling.particle}></div>
        <div className={particleStyling.particle}></div>
        <div className={particleStyling.particle}></div>
        <div className={particleStyling.particle}></div>
        <div className={particleStyling.particle}></div>
        <div className={particleStyling.particle}></div>
        <div className={particleStyling.particle}></div>
        <div className={particleStyling.particle}></div>
        <div className={particleStyling.particle}></div>
        <div className={particleStyling.particle}></div>
      </div>
      <div>
        <img src={gameLogo} className={splashStyling.logo} alt="Game logo" />
      </div>
      <div>
        <meta httpEquiv="refresh" content="3;url=/onboarding" />
      </div>
    </>
  );
}
