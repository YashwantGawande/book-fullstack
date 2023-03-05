import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Books = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchAllBooks = async () => {
      try {
        const res = await axios("http://localhost:8800/books");

        setBooks(res.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchAllBooks();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8800/books/${id}`);
      window.location.reload();
    } catch (err) {
      console.log(err);
    }
  };

  

  return (
    <div className="container">
      <h1>This is books database</h1>
      <div className="books">
        {books.map((book) => (
          <div className="book" key={book.id}>
            {book.cover && <img src={book.cover} alt="Book image" />}
            <h2>{book.title.slice(0,15)}...</h2>
            <p>{book.desc.slice(0,100)}...</p>
            <span>$ {book.price}</span>
            <div className="button-div">
              <button className="delete" onClick={() => handleDelete(book.id)}>
                Delete
              </button>
              <Link className="link" to={`/update/${book.id}`}>
                <button className="update">Update</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
      <Link className="link" to="/add">
        <button className="add">Add new book</button>
      </Link>
    </div>
  );
};

export default Books;

