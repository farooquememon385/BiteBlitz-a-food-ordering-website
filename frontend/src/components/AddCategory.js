import React from 'react'

const AddCategory = () => {
return (
    <section className="order" id="order">
  <h1 className="heading">
    Add <span>Category</span> Here
  </h1>
  {/*?php include 'config.php'?*/}
  <div className="row">
    <form action="/speciality" method="POST">
      <div className="inputBox">
        <input name="Name" type="text" placeholder="Name Here" />
      </div>
      <div className="inputBox">
        <input name="description" type="field" placeholder="Description Here" />
      </div>
      <div className="inputBox">
        <div className="imageContainer">
          <h3>Category Picture</h3>
          <div className="imageInput">
            <input
              style={{ width: "90%" }}
              type="file"
              name="fileToUpload"
              id="fileToUpload"
            />
          </div>
        </div>
      </div>
      <input
        type="submit"
        name="add"
        defaultValue="Add Category"
        className="btn"
      />
      <input
        type="submit"
        name="cancel"
        defaultValue="Cancel"
        className="btn"
      />
    </form>
    </div>
    </section>
  )
}

export default AddCategory