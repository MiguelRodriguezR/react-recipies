import React from "react";
import Header from "../header/Header";
import Form from "../form/Form";
import CategoriesProvider from "../../context/CategoriesContext";
import RecipeProvider from "../../context/RecipeContext";
import RecipeList from "../recipeList/RecipeList";
import ModalProvider from "../../context/ModalContext";

const Main = () => {
  return (
    <ModalProvider>
      <CategoriesProvider>
        <RecipeProvider>
          <Header></Header>
          <div className="container mt-5">
            <div className="row">
              <Form></Form>
            </div>
            <RecipeList></RecipeList>
          </div>
        </RecipeProvider>
      </CategoriesProvider>
    </ModalProvider>
  );
};

export default Main;
