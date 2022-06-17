import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { animalObject } from "../models/animalObject";
import { getList, save } from "../services/localstorage";
import { NavButton } from "./Styling/buttons";
import { StyledDescription } from "./Styling/description";
import { StyledImage } from "./Styling/images";
import { StyledTitle } from "./Styling/titles";
import { ButtonWrapper, ImageWrapper } from "./Styling/wrappers";

export const ShowAnimal = () => {
  const [animals, setAnimals] = useState<animalObject[]>([]);

  useEffect(() => {
    let animalList: animalObject[] = getList<animalObject>();
    if (animalList.length === 0) {
      fetch("https://animals.azurewebsites.net/api/animals")
        .then((response) => response.json())
        .then((animalData) => {
          setAnimals(animalData);
          save(animalData);
        });
    } else {
      setAnimals(animalList);
    }
  }, []);
  return (
    <>
      {animals.map((animal) => {
        return (
          <>
            <div key={animal.id}>
              <StyledTitle>{animal.name}</StyledTitle>
              <ImageWrapper>
                <StyledImage src={animal.imageUrl} alt={animal.name} />
              </ImageWrapper>
              <StyledDescription>{animal.shortDescription}</StyledDescription>
              <ButtonWrapper>
                <Link to={"/animal/" + animal.id}>
                  <NavButton>Mer Info</NavButton>
                </Link>
              </ButtonWrapper>
            </div>
          </>
        );
      })}
    </>
  );
};