import React, { useContext } from "react";
import { RecipeContext } from "../../context/RecipeContext";
import Recipe from "../recipe/Recipe";

const RecipeList = () => {
  const { recipes } = useContext(RecipeContext);

  return (
    <div className="row mt-5">
      {recipes.map((recipe) => (
        <Recipe key={recipe.idDrink} recipe={recipe}></Recipe>
      ))}
    </div>
  );
};

export default RecipeList;
