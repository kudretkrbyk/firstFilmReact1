// MovieDetail.js

import React from "react";
import { useSelector } from "react-redux";

import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardText,
  Button,
  Badge,
} from "reactstrap";
import { useParams } from "react-router-dom";

import { useSerisLister } from "../../firebase";

const SerieDetail = () => {
  const { id } = useParams();
  const movies = useSerisLister();

  // movies dizisindeki filmi seç
  const selectedMovie = movies.find((movie) => movie.id === id);
  console.log("seriDetailid =", id);
  console.log("seçilen film", selectedMovie);

  if (!selectedMovie) {
    return <div>Seçili film bulunamadı.</div>;
  }

  return (
    <div
      style={{
        background:
          "url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1440 320'%3E%3Cpath fill='%230099ff' fill-opacity='1' d='M0,160L48,170.7C96,181,192,203,288,197.3C384,192,480,160,576,133.3C672,107,768,85,864,96C960,107,1056,149,1152,181.3C1248,213,1344,235,1392,245.3L1440,256L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'%3E%3C/path%3E%3C/svg%3E\")",
        height: "100vh", // Sayfa yüksekliği kadar
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      <Container className="mt-4">
      <Row>
      <Col md="4">
        <Card>
          <CardImg top width="100%" src={selectedMovie.imageUrl} alt="Movie Poster" />
        </Card>
      </Col>
      <Col md="8">
        <Card>
          <CardBody>
            <CardTitle tag="h3">{selectedMovie.title}</CardTitle>
            {/* Kategori bilgileri eklenebilir, burada örneğin sadece 'Action' kategorisi gösterildi */}
            <Badge color="secondary">Action</Badge>
            <CardText className="mt-3">{selectedMovie.description}</CardText>
            <Button color="primary" className="mr-2">
              İzle
            </Button>
            <Button color="secondary">Listeye Ekle</Button>
          </CardBody>
        </Card>
      </Col>
    </Row>
    
      </Container>
    </div>
  );
};

export default SerieDetail;
