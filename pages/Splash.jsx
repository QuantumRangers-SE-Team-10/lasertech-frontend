import gameLogo from "../src/assets/logo.jpg";
import "../src/css/Splash.css";

export default Splash;

function Splash() {
  let timeLeft = 3;
  setInterval(() => {
    document.getElementById("countdown").innerHTML = timeLeft;
    timeLeft -= 1;
    if (timeLeft < 0) {
      timeLeft = 0;
    }
  }, 1000);

  return (
    <>
      <div>
        <img src={gameLogo} className="logo" alt="Game logo" />
      </div>
      <div id="countdown" className="countdown"></div>
      <div>
        <meta http-equiv="refresh" content="3;url=/onboarding" />
      </div>
    </>
  );
}
