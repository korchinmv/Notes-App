"use strict";
import { buttonAddNote, buttonDeleteAllNotes } from "./variables.js";
import { config } from "./variables.js";
import { Note } from "./components/Note.js";
import { Section } from "./components/Section.js";

const newNote = new Note(config.templateNote, config.noteSelector);
const noteElementToPage = new Section(config.containerNotes);

buttonAddNote.addEventListener("click", () => {
  noteElementToPage.addItem(newNote.generateNote());
});

buttonDeleteAllNotes.addEventListener("click", () => {
  noteElementToPage.deleteItems();
});
