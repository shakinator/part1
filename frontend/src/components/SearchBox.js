import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import '../index.css';
const SearchBox = ({ history }) => {
  const [keyword, setKeyword] = useState('')

  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      history.push(`/search/${keyword}`)
    } else {
      history.push('/')
    }
  }
  return (
    <Form onSubmit={submitHandler} inline
    >
      <Form.Control
        type='text'
        name='q'
        className="searchbox"
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
      ></Form.Control>
    </Form>
  )
}

export default SearchBox
