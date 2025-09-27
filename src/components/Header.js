import { Icon } from '@iconify/react'
import locationIcon from '@iconify/icons-mdi/fire-alert'
import nasaLogo from "./nasa-logo.png"; 

const Header = () => {
  return (
   <header className="header">
  <h1>
    <Icon icon={locationIcon} /> Worldwide Wildfire Tracker
  </h1>
  <div className="powered-by">
    Powered by <img src={nasaLogo} alt="NASA Logo" className="nasa-logo" />
  </div>
</header>

  );
};

export default Header;