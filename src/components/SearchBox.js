import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    if (keyword.trim()) {
      history.push(`/search/${keyword}`);
    } else {
      history.push("/");
    }
  };
  return (
    <Form className="searchBox" onSubmit={submitHandler} inline>
      <Form.Control
        type="text"
        name="q"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder="Search Products..."
        className=" mt-4 bg-light searchInput   w-100 px-5 rounded rounded-pill shadow-sm"
      ></Form.Control>
      <div class="input-group-append">
        <button
          id="button-addon1"
          type="submit"
          class="btn btn-link text-primary searchIcon"
          style={{ position: "absolute" }}
        >
          <i class="fa fa-search"></i>
        </button>
      </div>
    </Form>
  );
};

export default SearchBox;
