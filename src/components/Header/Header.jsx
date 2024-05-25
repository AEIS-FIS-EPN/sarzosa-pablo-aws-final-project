import "@components/Header/Header.css";

export function Header() {
  const handleNavLinkClick = (e) => {
    e.preventDefault(); // Prevent default anchor link behavior
    const targetId = e.currentTarget.getAttribute("href").slice(1); // Get the target id (removing the '#')
    const targetSection = document.getElementById(targetId);

    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };



  const handleNavLinkClickToTop = (e) => {
    console.log('Logo clicked'); // Check if this logs when you click the logo
    e.preventDefault();
    document.getElementById('top').scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="navbar navbar-expand-sm bg-body-tertiary">
      <div  className="container-navbar container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbar-toggler"
          aria-controls="navbar-toggler"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbar-toggler">
          <a
            className="navbar-brand"
            href="#hero"
            onClick={handleNavLinkClick}
          >
            <img src="./Header/code-slash.svg" alt="WebPageLogo" height={30} />
          </a>

          <ul className="navbar-nav">
            <li className="nav-item">
              <a
                className="nav-link"
                aria-current="page"
                href="#about"
                onClick={handleNavLinkClick}
              >
                About me
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link"
                href="#experience"
                onClick={handleNavLinkClick}
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                aria-disabled="false"
                href="#contact"
                onClick={handleNavLinkClick}
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
