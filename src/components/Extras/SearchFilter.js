import React, { useState } from "react";
import { AutoComplete, Input } from "antd";
import axios from "axios";

const SearchBooks = ({ onBookSelect }) => {
  const [bookOptions, setBookOptions] = useState([]);

  const handleSearch = (value) => {
    // Use Google Books API to search for books
    // Replace 'YOUR_API_KEY' with your actual Google Books API key
    axios
      .get(
        `https://www.googleapis.com/books/v1/volumes?q=${value}&key=YOUR_API_KEY`
      )
      .then((response) => {
        const bookData = response.data.items.map((book) => ({
          value: book.id,
          label: book.volumeInfo.title,
        }));
        setBookOptions(bookData);
      });
  };

  const handleSelect = (value, option) => {
    onBookSelect(option);
  };

  return (
    <AutoComplete
      onSearch={handleSearch}
      onSelect={handleSelect}
      options={bookOptions}
    >
      <Input.Search placeholder="Search for a book" />
    </AutoComplete>
  );
};

export default SearchBooks;
