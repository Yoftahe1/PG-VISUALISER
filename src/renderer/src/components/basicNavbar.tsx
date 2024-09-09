// styles
import classes from './navbar.module.css';

export default function BasicNavbar() {
  return (
    <div className={classes.wrapper}>
      <a href="/" className={classes.logo}>
        <h1>Schema Visually</h1>
      </a>

      <a href="/help" className="btn-wrapper">
        ? Help
      </a>
    </div>
  );
}
