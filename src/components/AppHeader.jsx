import logo from "../assets/investment-calculator-logo.png";

function AppHeader() {
  return (
    <header id="header">
      <img src={logo} alt="app-logo" />
      <h1>Investment Calculator</h1>
    </header>
  );
}

export default AppHeader;
