"use strict";

var refs = {
  searchForm: document.querySelector('.search__form'),
  searchInput: document.querySelector('.search__input'),
  searchButton: document.querySelector('.search__button')
};

var showSearch = function showSearch() {
  refs.searchForm.classList.add('visible');
};

refs.searchButton.addEventListener('click', showSearch);