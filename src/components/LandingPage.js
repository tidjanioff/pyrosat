import logo from './logo.png';
const LandingPage = ({ onEnter }) => {
  return (
    <div className="landing">
        <img src={logo} alt="Wildfire Tracker Logo" className="landing-logo" />
     
      <p>Track wildfires worldwide in real time.</p>
      <button onClick={onEnter} className="launch-btn">Launch Platform</button>
        <footer className="landing-footer">
      <p>
        © {new Date().getFullYear()} PyroSat | Built by Tidjani. Data provided by NASA.<br></br>All rights reserved.
       
      </p>
    </footer>
    </div>
    
  )
}

export default LandingPage
