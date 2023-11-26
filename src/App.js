import "bootstrap/dist/css/bootstrap.min.css";

//react import
import React from "react";
import { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { connect } from "react-redux";

//firebase import
import { addSerie, useMoviesLister, useSerisLister } from "./firebase";

//folder import
import Edit from "./Admin/AdminPages/Edit";
import AddMovies from "./Admin/AdminPages/AddMovies";
import AddSeries from "./Admin/AdminPages/AddSeries";
import Admin from "./Admin/Admin";
import Header from "./components/Header/Header";
import NotFound from "./pages/NotFound/NotFound";
import SerieDetail from "./pages/SerieDetail/SerieDetail";
import SeriesList from "./pages/SerieList/SeriesList";
import MovieList from "./pages/MovieList/MovieList";
import MovieDetail from "./pages/MovieDetail/MovieDetail";

const mapDispatchToProps = {
  addSerie,
};

const mapStateToProps = (state) => ({
  movies: state.movies,
  series: state.series,
});

const App = ({ addMovie, addSerie }) => {
  // const movies1 = useMoviesLister();
  // // useEffect içinde useMoviesLister hook'unu çağırdık
  // useEffect(() => {
  //   if (movies1.length > 0) {
  //     movies1.forEach((movie) => {
  //       addMovie({
  //         dId: movie.dId,
  //         id: movie.id,
  //         title: movie.title,
  //         imageUrl: movie.imageUrl,
  //         description: movie.description,
  //       });
  //     });
  //   }
  // }, [addMovie, movies1]);

  // const series1 = useSerisLister();
  // //useEffect içinde useMoviesLister hook'unu çağırdık
  // useEffect(() => {
  //   if (series1.length > 0) {
  //     series1.forEach((serie) => {
  //       addSerie({
  //         id: serie.id,
  //         title: serie.title,
  //         imageUrl: serie.imageUrl,
  //         description: serie.description,
  //       });
  //     });
  //   }
  // }, [addSerie, series1]);

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<MovieList></MovieList>}></Route>
        <Route path="/Filmler" element={<MovieList></MovieList>}></Route>
        <Route path="/Diziler" element={<SeriesList></SeriesList>}></Route>
        <Route
          path="/Admin/AddMovies"
          element={<AddMovies></AddMovies>}
        ></Route>
        <Route
          path="/Admin/AddSeries"
          element={<AddSeries></AddSeries>}
        ></Route>
        <Route path="/Admin/Edit" element={<Edit></Edit>}></Route>
        <Route path="/movies/:id" element={<MovieDetail />}></Route>
        <Route
          path="/Diziler/:id"
          element={<SerieDetail></SerieDetail>}
        ></Route>
        <Route path="/Admin" element={<Admin></Admin>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </Router>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
