var React = require('react');
var {Link, IndexLink} = require('react-router');

var Navbar = () => {
  return (
// menu with hamburger to refactor
    <nav className="navbar navbar-toggleable-md navbar-light bg-faded">
      <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <a className="navbar-brand">WeatherApp</a>
      <div className="collapse navbar-collapse justify-content-end nav-right" idName="navbarNavAltMarkup">
        <div className="navbar-nav">
          <IndexLink to="/" className="nav-item nav-link" activeClassName="active">Current</IndexLink>
          <Link to="/weathercharts" className="nav-item nav-link" activeClassName="active">Forecast</Link>
          {/* Disabled Polution - Comming Soon*/}
          <Link /* to="/polutioncharts" */className="nav-item nav-link" activeClassName="active" >Polution</Link>
        </div>
      </div>
    </nav>

  );
};

export default Navbar;
