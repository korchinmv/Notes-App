"use strict";

export class Note {
  constructor(templateSelector, noteSelector) {
    this._templateSelector = templateSelector;
    this._noteSelector = noteSelector;
  }

  _getTemplate() {
    const noteElement = document
      .querySelector(this._templateSelector)
      .content.querySelector(this._noteSelector)
      .cloneNode(true);

    return noteElement;
  }

  generateNote() {
    this._element = this._getTemplate();
    this._titleElement = this._element.querySelector(".notes__title");
    this._titleElement.innerText = "Заголовок";
    this._textElement = this._element.querySelector(".notes__text");
    this._textElement.innerText = "Ваш текст";
    this._editButton = this._element.querySelector(".button-edit");
    this._deleteButton = this._element.querySelector(".button-delete");
    this._inputTitle = this._element.querySelector(".notes__title-input");
    this._textarea = this._element.querySelector(".notes__textarea");
    this._setEventListeners();

    return this._element;
  }

  _editNote() {
    this._titleElement.classList.toggle("hidden");
    this._textElement.classList.toggle("hidden");

    this._inputTitle.classList.toggle("hidden");
    this._textarea.classList.toggle("hidden");
  }

  _deleteNote() {
    this._element.remove();
    this._element = null;
  }

  _setEventListeners() {
    this._deleteButton.addEventListener("click", () => {
      this._deleteNote();
    });

    this._editButton.addEventListener("click", () => {
      this._editNote();
    });

    this._inputTitle.addEventListener("input", (element) => {
      this._titleElement.innerText = element.target.value;
    });
    this._textarea.addEventListener("input", (element) => {
      this._textElement.innerText = element.target.value;
    });
  }
}
