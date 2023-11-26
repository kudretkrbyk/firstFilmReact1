

import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
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
} from 'reactstrap';
import { connect } from 'react-redux';
import { useSerisLister } from '../../firebase';

const mapStateToProps = (state) => ({
  movies: state.movies.movies,
});


const SeriesList = () => {
  const navigate = useNavigate();

   const handleMovieClick = (id) => {
    navigate(`/Diziler/${id}`);
   };

  function limitString(str, maxLength) {
    if (str.length > maxLength) {
      return `${str.slice(0, maxLength)}...`;
    }
    return str;
  }

  const series = useSerisLister();
  return (
    <div className='seriesList'>
    <Container className="mt-4">
      <Row>
        {series.map((movie) => (
          <Col key={movie.id} md="4">
            <Card  className='Card'>
              <CardImg top width="100%" src={movie.imageUrl} alt={movie.title} />
              <CardBody >
                <CardTitle tag="h5">{movie.title}</CardTitle>
                <CardSubtitle className="mb-2 text-muted" tag="h6">
                  {/* Description'ı sınırla */}
                  {limitString(movie.description,100)}...
                </CardSubtitle>
                <Link to={`/Diziler/${movie.id}`}>
                  <Button color="primary" onClick={() => handleMovieClick(movie.id)}>
                    İncele
                  </Button>
                </Link>{' '}
                <Button color="primary" onClick={() => handleMovieClick(movie)}>
                  Listeye Ekle
                </Button>
              </CardBody>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
    </div>
  );
};


export default connect(mapStateToProps)(SeriesList);
