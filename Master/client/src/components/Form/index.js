// install dependencies
import React from "react";

// functional component called Form
// passing in the following props
  // q which is the query
  // method handleInputChange which will update the state of updates
  // method handleFormSubmit which will update the state and perform API call to search for the book 
function Form({ q, handleInputChange, handleFormSubmit }) {
  // returning a Bootstrap form
  return (
    <form>
      <div className="form-group">
        <label htmlFor="Query">
          <strong>Book</strong>
        </label>
        {/* creating an input book for title*/}
        <input
          className="form-control"
          id="Title"
          type="text"
          // use the query
          value={q}
          placeholder="Ready Player One"
          name="q"
          onChange={handleInputChange}
          required
        />
      </div>
      <div className="pull-right">
        {/* button for submitting form*/}
        <button
          onClick={handleFormSubmit}
          type="submit"
          className="btn btn-lg btn-danger float-right"
        >
          Search
        </button>
      </div>
    </form>
  );
}

// export as Form
export default Form;
