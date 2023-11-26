// MovieList.js

import React from "react";
import "./styles.css";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  Button,
  CardSubtitle,
} from "reactstrap";
import { connect } from "react-redux";
import { useMoviesLister } from "../../firebase";

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});

const MovieList = () => {
  const movies = useMoviesLister();
  const navigate = useNavigate();

  const select = movies.find((movie) => movie.id === "AOI2a5j3wzmPPCmcTNwF");

  const handleMovieClick = (id) => {
    navigate(`/movies/${id}`);
  };

  function limitString(str, maxLength) {
    if (str.length > maxLength) {
      return `${str.slice(0, maxLength)}...`;
    }
    return str;
  }
  return (
    <div className="movieList">
      <Container className="mt-4">
        <Row>
          {movies.map((movie) => (
            <Col key={movie.id} md="4">
              <Card className="Card">
                <CardImg
                  top
                  width="100%"
                  src={movie.imageUrl}
                  alt={movie.title}
                />
                <CardBody>
                  <CardTitle tag="h5">{movie.id}</CardTitle>
                  <CardSubtitle className="mb-2 text-muted" tag="h6">
                    {/* Description'ı sınırla */}
                    {limitString(movie.description, 100)}...
                  </CardSubtitle>
                  <Link to={`/movies/${movie.id}`}>
                    <Button
                      color="primary"
                      onClick={() => handleMovieClick(movie.id)}
                    >
                      İncele
                    </Button>
                  </Link>{" "}
                  <Button
                    color="primary"
                    onClick={() => handleMovieClick(movie)}
                  >
                    Listeye Ekle
                  </Button>
                </CardBody>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
      {console.log(select)}
    </div>
  );
};

export default connect(mapStateToProps)(MovieList);
