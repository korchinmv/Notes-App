"use strict";
import { buttonAddNote, buttonDeleteAllNotes } from "./variables.js";
import { config } from "./variables.js";
import { Note } from "./components/Note.js";
import { Section } from "./components/Section.js";

const newNote = ({ templateNote, noteSelector }) => {
  const note = new Note(templateNote, noteSelector);
  const noteElement = note.generateNote();
  return noteElement;
};

const noteElementToPage = new Section(config.containerNotes);

buttonAddNote.addEventListener("click", () => {
  noteElementToPage.addItem(newNote(config));
});

buttonDeleteAllNotes.addEventListener("click", () => {
  noteElementToPage.deleteItems();
});
