const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark p-3">
    <div className="container-fluid">
      <a className="navbar-brand" href="/">MEDHAT مدحت</a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link mx-2" aria-current="page" href="/arabic"
              >Arabic</a
            >
          </li>
          <li className="nav-item">
            <a className="nav-link mx-2" href="/english">English</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-2" href="/cooking">Cooking</a>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link mx-2 dropdown-toggle"
              href="#"
              id="navbarDropdownMenuLink"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              Other
            </a>
            <ul
              className="dropdown-menu"
              aria-labelledby="navbarDropdownMenuLink"
            >
              <li>
                <a className="dropdown-item" href="/archives">Archives</a>
              </li>
              <li>
                <a className="dropdown-item" href="/church">Church</a>
              </li>
              <li>
                <a className="dropdown-item" href="/handyman"
                  >Handyman</a
                >
              </li>                  
              <li><a className="dropdown-item" href="/mvp">MVP</a></li>
              <li>
                <a className="dropdown-item" href="recruiters.html"
                  >Recruiters</a
                >
              </li>
              <li>
                <a className="dropdown-item" href="/travel">Travel</a>
              </li>
              <li><a className="dropdown-item" href="/tv">TV</a></li>
              <li><a className="dropdown-item" href="/video">Video</a></li>
              <li><a className="dropdown-item" href="/music">Music</a></li>
              <li><a className="dropdown-item" href="/images">Images</a></li>

            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>  
  );
};

export default NavBar;
