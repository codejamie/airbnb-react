import logo from '../assets/airbnb-logo.png'

function Navbar() {
  return (
    <nav className="navbar">
      <div className="brand">
        <div className="logo">
          <img src={logo} alt="airbnb logo" />
        </div>
        <div className="logo-text">
          <h2>airbnb</h2>
        </div>
      </div>
      
      <div className="stays">
        <p>Stays</p>
        <p>Experiences</p>
      </div>

      <div className="account">
        <p>Airbnb your home</p>

        <div class="btn-account">Account</div>
      </div>
    </nav>
  ) 
}

export default Navbar