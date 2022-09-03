import React from 'react'

const AddNewBook= () => {
  return (
    <div>
        <h2>Add New Book</h2>
        <form>
            <label>Books:</label>
            <input 
            type="text" 
            required
            />
            <label>Author:</label>
            <input 
            type="text" 
            required
            />
            <button>Add book</button>
        </form>

    </div>
  )
}

export default AddNewBook