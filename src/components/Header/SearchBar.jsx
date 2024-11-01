import React from 'react'

export default function SearchBar({handleSubmit}) {
  return (
    <div className="container d-flex justify-content-between mt-2">
      <h3>Fake Store.</h3>
    <form className="d-flex my-2 my-lg-0 w-50" onSubmit={handleSubmit} >
        <input
            className="form-control me-sm-2"
            type="text"
            placeholder="Search"
            id='SearchBar'
        />
        <button className="btn btn-outline-success my-2 my-sm-0" type="submit" >
            Search
        </button>
    </form>
</div>
  )
}
