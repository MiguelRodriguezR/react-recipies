import React, { useContext, useState } from "react";
import { ModalContext } from "../../context/ModalContext";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 800,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
}));

const Recipe = ({ recipe }) => {
  const [modalStyle] = useState(getModalStyle);
  const [open, setOpen] = useState(false);

  const classes = useStyles();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const showIngridients = (recipeModal) => {
    let ingredients = [];
    for (let i = 1; i < 16; i++) {
      if (recipeModal[`strIngredient${i}`]) {
        ingredients.push(
          <li>
            {recipeModal[`strIngredient${i}`]} - {recipeModal[`strMeasure${i}`]}
          </li>
        );
      }
    }
    return(ingredients);
  };

  const { recipeModal, saveIdRecipe, saveRecipe } = useContext(ModalContext);

  return (
    <div className="col-md-4 mb-3">
      <div className="card">
        <h2 className="card-header">{recipe.strDrink}</h2>
        <img src={recipe.strDrinkThumb} alt="" className="card-img-top" />
        <div className="card-body">
          <button
            type="button"
            onClick={() => {
              saveIdRecipe(recipe.idDrink);
              handleOpen();
            }}
            className="btn btn-block btn-primary"
          >
            See More...
          </button>

          <Modal
            open={open}
            onClose={() => {
              saveRecipe({});
              saveIdRecipe(null);
              handleClose();
            }}
          >
            <div style={modalStyle} className={classes.paper}>
              <h2>{recipeModal.strDrink}</h2>
              <h3 className="mt-4">Instructions</h3>
              <p>{recipeModal.strInstructions}</p>
              <img
                src={recipeModal.strDrinkThumb}
                alt=""
                className="img-fluid my-4"
              />
              <h3>Ingridients</h3>
              <ul>{showIngridients(recipeModal)}</ul>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
