import React, { useState } from "react";

function CreateArea(props) {
  const [noteTitle, setNoteTitle] = useState("");
  const [noteContent, setNoteContent] = useState("");

  function handleInput(event) {
    const name = event.target.name;
    const value = event.target.value;
    if (name === "title") {
      setNoteTitle(value);
    } else if (name === "content") {
      setNoteContent(value);
      // } else if (name === "createNote") {
    }
  }

  function submitNewNote(event) {
    event.preventDefault();
    props.setNewNote((prevValue) => {
      return [
        ...prevValue,
        {
          title: noteTitle,
          content: noteContent
        }
      ];
    });
    setNoteTitle("");
    setNoteContent("");
  }

  return (
    <div>
      <form>
        <input
          name="title"
          onChange={handleInput}
          placeholder="Title"
          value={noteTitle}
        />
        <textarea
          name="content"
          onChange={handleInput}
          placeholder="Take a note..."
          rows="3"
          value={noteContent}
        />
        <button onClick={submitNewNote} name="createNote">
          Add
        </button>
      </form>
    </div>
  );
}

export default CreateArea;
