import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState([]);

  function deleteNote(idOfNoteToDelete) {
    setNotes((prevValue) => {
      return notes.filter(function (notes, index) {
        return index !== idOfNoteToDelete;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea setNewNote={setNotes} notes={notes} />
      {notes.map((eachNote, index) => (
        <Note
          key={index}
          id={index}
          title={eachNote.title}
          content={eachNote.content}
          deleteNote={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
