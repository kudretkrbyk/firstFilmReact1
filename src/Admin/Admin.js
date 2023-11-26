// Admin.js
import React, { useState } from "react";
import { Button, Table,  FormGroup } from "reactstrap";
import { Link } from "react-router-dom";
import {
  removeFromDatabase,
  useSerisLister,
  useMoviesLister,
  removeFromSerie,
} from "../firebase";
import { connect } from "react-redux";


import "../Admin/Admin.css";

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

function Admin() {
  const [sidebarWidth, setSidebarWidth] = useState(0);
  const [sidebar, setSidebar] = useState(false);
  const moviesi = useMoviesLister();
  const series = useSerisLister();
  const [selectedLink, setSelectedLink] = useState(null);
  const [baslik, setBaslik] =useState("Admin");

  const handleLinkClick = (link) => {
    setSelectedLink(link);
    setBaslik(link === "Filmler" ? "Film" : link === "Diziler" ? "Dizi" : "Admin");
  };

  const openNav = () => {
    setSidebarWidth(250);
    setSidebar(true);
  };

  const closeNav = () => {
    setSidebarWidth(0);
    setSidebar(false);
  };

  const handleClickRemoveMovie = (movieId) => {
    removeFromDatabase(movieId);
  };
  const handleClickRemoveSerie = (movieId) => {
    removeFromSerie(movieId);
  };

  const [tableOn, setTableOn] = useState(false);

  const handleTableOn = () => {
    setTableOn(true);
  };

  return (
    <>
      <div
        id="mySidebar"
        className="sidebar"
        style={{ width: `${sidebarWidth}px` }}
      >
        <a href="#" className="closebtn" onClick={closeNav}>
          ×
        </a>
        <Link onClick={() => handleLinkClick("Filmler")} to="#">
          Filmler
        </Link>
        <Link onClick={() => handleLinkClick("Diziler")} to="#">
          Diziler
        </Link>
        <Link onClick={() => handleLinkClick("Diger")} to="#">
          Diğer{" "}
        </Link>
      </div>

      <div id="main" style={{ marginLeft: `${sidebarWidth}px` }}>
        <button hidden={sidebar} className="openbtn" onClick={openNav}>
          ☰ MENU
        </button>

        <Table hidden={tableOn}>
          {selectedLink ? (
            <h1> {selectedLink} </h1>
          ) : (
            <h1 hidden>admin panel</h1>
          )}

          <thead>
            <tr>
              <th>ID</th>
              <th>{baslik} Adı</th>
              <th>{baslik} Açıklaması</th>
              <th>İşlem</th>
              {""}
            </tr>
          </thead>

          {selectedLink === "Filmler" && (
            <tbody>
              {moviesi.map((movie) => (
                <tr key={movie.id}>
                  <td>{movie.id}</td>
                  <td>{movie.title}</td>
                  <td>
                    <FormGroup>
                      <textarea rows="5" cols="40">
                        {movie.description}
                      </textarea>
                    </FormGroup>
                  </td>
                  <td>
                    <Button color="danger" tag={Link} to="/Admin/Edit">
                      Düzenle
                    </Button>{" "}
                    <Button color="warning">Kaydet</Button>{" "}
                    <Button
                      color="success"
                      onClick={() => handleClickRemoveMovie(movie.id)}
                    >
                      Sil
                    </Button>{" "}
                  </td>
                </tr>
              ))}
              <tr>
                <td>
                  <Button
                    tag={Link}
                    to="/Admin/AddMovies"
                    color="danger"
                    onClick={handleTableOn}
                  >
                    Yeni giriş
                  </Button>
                </td>
              </tr>
            </tbody>
          )}
          {selectedLink === "Diziler" && (
            <tbody>
              {series.map((movie) => (
                <tr key={movie.id}>
                  <td>dizi</td>
                  <td>{movie.title}</td>
                  <td>
                    <FormGroup>
                      <textarea rows="5" cols="40">
                        {movie.description}
                      </textarea>
                    </FormGroup>
                  </td>

                  <td>
                    <Button tag={Link} to="/Admin/Edit" color="danger">
                      Düzenle
                    </Button>{" "}
                    <Button color="warning">Kaydet</Button>{" "}
                    <Button
                      color="success"
                      onClick={() => handleClickRemoveSerie(movie.id)}
                    >
                      Sil
                    </Button>{" "}
                  </td>
                </tr>
              ))}
              <tr>
                <td>
                  <Button tag={Link} to="/Admin/AddSeries" color="danger">
                    Yeni giriş
                  </Button>
                </td>
              </tr>
            </tbody>
          )}
          {selectedLink === "Diger" && (
            <tbody>
              {moviesi.map((movie) => (
                <tr key={movie.id}>
                  <td cols="1">{movie.id}</td>
                  <td>{movie.title}</td>
                  <td>
                    <FormGroup>
                      <textarea rows="5" cols="40">
                        {movie.description}
                      </textarea>
                    </FormGroup>
                  </td>
                  <td>
                    <Button color="danger">Düzenle</Button>{" "}
                    <Button color="warning">Kaydet</Button>{" "}
                    <Button color="success">Sil</Button>{" "}
                  </td>
                </tr>
              ))}
              <tr>
                <td>
                  <Button color="danger">Yeni giriş</Button>
                </td>
              </tr>
            </tbody>
          )}
          <tbody></tbody>
        </Table>
      </div>
    </>
  );
}

export default connect(mapStateToProps)(Admin);
