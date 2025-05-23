import React from "react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar({ userData, userName, logout }) {
  return (
    <>
      <nav className={`navbar navbar-expand-lg navbar-dark ${styles.navbar}`}>
        <div className="container-fluid">
          <Link className="navbar-brand fw-bold" to="home">
            Noxe
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
            {userData ? (
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <Link
                    className="nav-link active"
                    aria-current="page"
                    to="home"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="movies">
                    Movies
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="tvshows">
                    Tv shows
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="people">
                    People
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="about">
                    About
                  </Link>
                </li>
              </ul>
            ) : (
              ""
            )}
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <div className="social-icons d-flex align-items-center">
                <i className="fab mx-2 fa-facebook"></i>
                <i className="fab mx-2 fa-spotify"></i>
                <i className="fab mx-2 fa-instagram"></i>
                <i className="fab mx-2 fa-youtube"></i>
              </div>
              {userData ? (
                <>
                  <li className="nav-item d-flex align-items-center">
                    <span className="nav-link text-white">Welcome, {userName}</span>
                  </li>
                  <li className="nav-item">
                    <span
                      onClick={logout}
                      className={`nav-link ${styles.cursorPointer}`}
                    >
                      Logout
                    </span>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="login">
                      Login
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="register">
                      Register
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
