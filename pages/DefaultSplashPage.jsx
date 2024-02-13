import gameLogo from '../src/assets/logo.jpg'

export default DefaultSplashPage;

function DefaultSplashPage() {

  return (
    <>
      <div>
        <img src={gameLogo} className="logo" alt="Game logo" />
      </div>
      <div>
        <a href="/onboarding"> {/*what is onboarding page called, link to that*/}
          <button>Start</button> {/*add css stuff*/}
        </a>
      </div>
    </>
  )
}