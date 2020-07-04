import React, { createContext, useState, useEffect } from "react";
import Axios from "axios";

export const CatagoryContext = createContext();

const CategoriesProvider = (props) => {
  const [categories, saveCategories] = useState([]);

  useEffect(() => {
    const getCategories = async () =>{
        const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list";
        const categories = await Axios.get(url);
        saveCategories(categories.data.drinks);
    }

    getCategories();
  },[])


  return <CatagoryContext.Provider value={{categories}}>{props.children}</CatagoryContext.Provider>;
};


export default CategoriesProvider;