import React, { useEffect, useState } from "react";
import axios from "axios";
import { Spin, Alert, List } from "antd";

function BookReviews() {
  const [randomBooks, setRandomBooks] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchRandomBooks = async () => {
    try {
      const response = await axios.get(
        "https://www.googleapis.com/books/v1/volumes",
        {
          params: {
            q: "random",
            maxResults: 5,
          },
        }
      );

      const books = response.data.items;

      const formattedBooks = books.map((book) => {
        const title = book.volumeInfo.title || "Unknown Title";
        const rating = book.volumeInfo.averageRating || "N/A";

        return { title, rating };
      });

      setRandomBooks(formattedBooks);
      setLoading(false);
      setError(null);
    } catch (error) {
      setError(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRandomBooks();
  }, []);

  return (
    <div>
      {loading && <Spin size="large" />}
      {error && <Alert message={`Error: ${error.message}`} type="error" />}
      {randomBooks.length > 0 && (
        <List
          dataSource={randomBooks}
          renderItem={(book, index) => (
            <List.Item key={index}>
              <h3>{book.title}</h3>
              <p>Rating: {book.rating}</p>
            </List.Item>
          )}
        />
      )}
    </div>
  );
}

export default BookReviews;
