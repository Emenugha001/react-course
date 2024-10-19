import './App.css';
import SAV from './assets/sav.svg';
import RUN2 from './assets/run2.svg';

function App() {
  return (
    <div className='goat'>
      <div className="icon">
        <img src={SAV} alt="profile pics"/>
      </div>
      {/* Left Side: Sign In Form */}
        <div className="dog">
          <div className="login-container">
            <div className="login-sub-container">
              <div className="login-box">
                <div className="login-form">
                  <h2 className="login-title">Sign in</h2>
                  <p>to access Aquila</p>
                  <form>
                    <input type="email" placeholder="Email address" className="input-field" />
                    <input type="password" placeholder="Password" className="input-field" />
                    <button type="submit" className="login-button">Log In</button>
                  </form>
                  <a href="#" className="forgot-password">Forgot Password?</a>
                </div>
              </div>
              <br/>
              <div className="login-box2">
                <div className="login-form2">
                  <img src={RUN2} alt="profile pics"/>
                  <br/>
                  <h3>Upload Your Mobile Apps</h3>
                  <p className="step">The first step to achieving security for your mobile application, is uploading on Aquila</p>
                </div>
              </div>
            </div>
          </div>

          <div className="paragraph">
           Don’t have an Aquila account? <span className="little">Sign Up Now</span>
          </div>
        </div>
      </div>
  );
}

export default App;
