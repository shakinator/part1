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
    <Form onSubmit={submitHandler} inline>
      <Form.Control
        type='text'
        name='q'
        onChange={(e) => setKeyword(e.target.value)}
        placeholder='Search Products...'
        className='mr-sm-2 ml-sm-5 '
      ></Form.Control>
      <Button
        type='submit'
        variant='outline-success'
        className='p-2 mt-2 mt-md-0 search'
      >
        <a style={{fontSize:"20px"}}>
          <i className="fas fa-search"></i>
        </a>
      </Button>
    </Form>
  )
}

export default SearchBox
