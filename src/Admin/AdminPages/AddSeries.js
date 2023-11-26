import React from "react";
import { useState } from "react";

import { Button, Table } from "reactstrap";
import { addSerie } from "../../firebase";

export default function AddSeries() {
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
      addSerie({
        titleg: newMovieTitle,
        descriptiong: newMovieDescription,
        imageUrlg: newMovieImageUrl,
      });
      window.alert( "Dizi eklendi!");

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
            <th>Dizi Adı</th>
            <th>Dizi Açıklaması</th>
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
                placeholder="Dizi Adı"
                value={newMovieTitle}
                onChange={handleNewMovieTitleChange}
              />
            </td>
            <td>
              <input
                type="text"
                placeholder="Dizi Açıklaması"
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
