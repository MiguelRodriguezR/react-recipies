import React, { useContext, useState } from "react";
import { CatagoryContext } from "../../context/CategoriesContext";
import { RecipeContext } from "../../context/RecipeContext";

const Form = () => {
  const { setSearch } = useContext(RecipeContext);
  const { categories } = useContext(CatagoryContext);

  const [search, saveSearch] = useState({
    name: "",
    category: "",
  });

  const getData = (e) => {
    saveSearch({ ...search, [e.target.name]: e.target.value });
  };

  const submitF = (e) => {
      e.preventDefault();
      setSearch(search)
  } 

  return (
    <form className="col-12" onSubmit={submitF} action="">
      <fieldset className="text-center">
        <legend>Search drinks by category or ingridient</legend>
      </fieldset>

      <div className="row mt-4">
        <div className="col-md-4">
          <input
            type="text"
            name="name"
            className="form-control"
            placeholder="search by ingridient"
            onChange={getData}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-control"
            name="category"
            id=""
            onChange={getData}
          >
            <option value="">-- Select Category --</option>
            {categories.map((category) => (
              <option key={category.strCategory} value={category.strCategory}>
                {category.strCategory}
              </option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <input
            type="submit"
            className="btn btn-block btn-primary"
            value="Search Drinks"
          />
        </div>
      </div>
    </form>
  );
};

export default Form;
