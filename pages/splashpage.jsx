import React, { useEffect, useState } from 'react';
import '/src/css/splashpage.css';
import '/src/assets/splashimage.jpg';

function SplashPage() {
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    const countdownInterval = setInterval(() => {
      setCountdown((prevCount) => prevCount - 1);
    }, 1000);

    if (countdown === 0) {
      clearInterval(countdownInterval);
      window.location.replace("/onboarding");
    }

    return () => clearInterval(countdownInterval);
  }, [countdown]);

  return (
    <div className="window">
    <div style={{ height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f0f0f0' }}>
      <div style={{ position: 'fixed', top: '20px', right: '20px', fontSize: '24px' }}>{countdown}</div>
      <img style={{ maxWidth: '100%', maxHeight: '100%' }} src='/src/assets/splashimage.jpg' alt="Splash Image" />
    </div>
    </div>
  );
}


export default SplashPage;