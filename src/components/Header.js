import { Link } from "react-router-dom";
import transitions from "bootstrap";

const Header = ({ active, setActive, user, handleLogout }) => {
  const userId = user?.uid;

  return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to="/" className="navbar-brand">
            <img
                className="image-logo"
                src="/img_2.png"
                alt="logo"
                style={{
                  width: "100%",
                  height: "auto",
                  maxWidth: "200px", // Ajustez la taille maximale du logo selon vos besoins
                  marginTop: "12px",
                }}
            />
          </Link>

          <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li
                  className={`nav-item nav-link ${
                      active === "Acceuil" ? "active" : ""
                  }`}
                  onClick={() => setActive("Accueil")}
              >
                <Link to="/" className="nav-link" style={{ textDecoration: "none" }}>
                  Accueil
                </Link>
              </li>
              <li
                  className={`nav-item nav-link ${
                      active === "about" ? "active" : ""
                  }`}
                  onClick={() => setActive("about")}
              >
                <Link to="/about" className="nav-link" style={{ textDecoration: "none" }}>
                  About
                </Link>
              </li>
            </ul>

            <ul className="navbar-nav mb-2 mb-lg-0">
              {userId ? (
                  <>
                    <li
                        className={`nav-item nav-link ${
                            active === "home" ? "active" : ""
                        }`}
                        onClick={() => setActive("home")}
                    >
                      <Link to="/home" className="nav-link" style={{ textDecoration: "none" }}>
                        Mes clients
                      </Link>
                    </li>
                    <li
                        className={`nav-item nav-link ${
                            active === "create" ? "active" : ""
                        }`}
                        onClick={() => setActive("create")}
                    >
                      <Link to="/create" className="nav-link" style={{ textDecoration: "none" }}>
                        Ajouter client
                      </Link>
                    </li>
                  </>
              ) : (
                  <li>
                    <Link to="/auth" className="nav-link"
                      style={{ textDecoration: "none" }}
                          onClick={() => setActive("auth")}>

                      Connexion
                    </Link>
                  </li>
              )}
            </ul>

            <ul className="navbar-nav ml-auto">
              {userId ? (
                  <>
                    <li className="nav-item">
                      <div className="profile-logo">
                        <img
                            src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
                            alt="logo"
                            style={{
                              width: "30px",
                              height: "30px",
                              borderRadius: "50%",
                              marginTop: "12px",
                            }}
                        />
                      </div>
                    </li>
                    <li className="nav-item">
                      <p style={{ marginTop: "12px", marginLeft: "5px" }}>
                        {user?.displayName}
                      </p>
                    </li>
                    <li
                        className="nav-item nav-link"
                        onClick={handleLogout}
                        style={{ cursor: "pointer" }}
                    >
                      Déconnexion
                    </li>
                  </>
              ) : null}
            </ul>
          </div>
        </div>
      </nav>
  );
};

export default Header;
