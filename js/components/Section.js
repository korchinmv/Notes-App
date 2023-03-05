"use strict";

export class Section {
  constructor(containerNotes) {
    this._containerNotes = document.querySelector(containerNotes);
  }

  addItem(element) {
    this._containerNotes.prepend(element);
  }

  deleteItems() {
    this._containerNotes.innerHTML = "";
  }
}
