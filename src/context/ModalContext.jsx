import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const ModalContext = createContext();

const ModalProvider = (props) => {
  const [idRecipe, saveIdRecipe] = useState(null);
  const [recipeModal, saveRecipe] = useState({})

  useEffect( ()=>{
      if(idRecipe){
          const getRecipe = async () =>{
            const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${idRecipe}`;
            const result = await Axios.get(url);
            saveRecipe(result.data.drinks[0]);
          }
          getRecipe();
      }
  },[idRecipe])

  return (
    <ModalContext.Provider value={{ recipeModal, saveIdRecipe, saveRecipe }}>
      {props.children}
    </ModalContext.Provider>
  );
};

export default ModalProvider;
