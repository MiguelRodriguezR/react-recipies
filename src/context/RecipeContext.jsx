import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const RecipeContext = createContext();

const RecipeProvider = (props) => {
  const [recipes, saveRecipes] = useState([]);
  const [search, setSearch] = useState({
    name: "",
    category: "",
  });

  useEffect(() => {
    if (search.name !== "") {
      const getRecipe = async () => {
        const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${search.category}&i=${search.name}`;
        const result = await Axios.get(url);
        saveRecipes(result.data.drinks);
    };
      getRecipe();
    }
  }, [search]);

  return (
    <RecipeContext.Provider value={{ recipes,setSearch }}>
      {props.children}
    </RecipeContext.Provider>
  );
};

export default RecipeProvider;
