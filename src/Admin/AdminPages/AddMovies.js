import React from "react";
import { Button,Table } from "reactstrap";
import { useState } from "react";
import { addMovie } from "../../firebase";

export default function AddMovies() {
    const [newMovieTitle, setNewMovieTitle] = useState("");
    const [newMovieDescription, setNewMovieDescription] = useState("");
    const [newMovieImageUrl, setNewMovieImageUrl] = useState("");
  const handleNewMovieTitleChange = (e) => setNewMovieTitle(e.target.value);
  const handleNewMovieDescriptionChange = (e) =>
    setNewMovieDescription(e.target.value);
  const handleNewMovieImageUrlChange = (e) =>
    setNewMovieImageUrl(e.target.value);
  const handleAddNewFilm = () => {
    if (newMovieTitle && newMovieDescription && newMovieImageUrl) {
      
      addMovie({
        titleg: newMovieTitle,
        descriptiong: newMovieDescription,
        imageUrlg: newMovieImageUrl,
      });

      setNewMovieTitle("");
      setNewMovieDescription("");
      setNewMovieImageUrl("");
    } else {
      console.error("Tüm input alanlarını doldurun.");
    }
  };

  return (
    <div>
      <Table>
        <thead>
          <tr>
            <th>ID?</th>
            <th>Film Adı</th>
            <th>Film Açıklaması</th>
            <th>İmageUrl</th>
            <th>işlem</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>id</td>
            <td>
              <input
                type="text"
                placeholder="Film Adı"
                value={newMovieTitle}
                onChange={handleNewMovieTitleChange}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Film Açıklaması"
                value={newMovieDescription}
                onChange={handleNewMovieDescriptionChange}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Görsel Linki"
                value={newMovieImageUrl}
                onChange={handleNewMovieImageUrlChange}
              />
            </td>
            <td>
              <Button color="danger" onClick={handleAddNewFilm}>
                Kaydet
              </Button>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
