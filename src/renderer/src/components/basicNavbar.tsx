// styles
import classes from './navbar.module.css';
import logo from "../assets/pg-ic.svg"

export default function BasicNavbar() {
  return (
    <div className={classes.wrapper}>
      <a href="/" className={classes.logo}>
      <img src={logo} alt="pg-logo" />
        <h1>Schema Visually</h1>
      </a>

      <a href="/help" className="btn-wrapper">
        ? Help
      </a>
    </div>
  );
}
