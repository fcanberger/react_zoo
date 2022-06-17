import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { animalObject } from "../models/animalObject";
import { getList, save } from "../services/localstorage";
import { FedButton, NavButton } from "./Styling/buttons";
import { StyledDescription } from "./Styling/description";
import { StyledImage } from "./Styling/images";
import { StyledTitle } from "./Styling/titles";
import { ButtonWrapper, ImageWrapper } from "./Styling/wrappers";

export const SingleAnimal = () => {
  const [animal, setAnimal] = useState<animalObject>({
    name: "",
    latinName: "",
    imageUrl: "",
    longDescription: "",
    isFed: false,
  });
  let animalList: animalObject[] = getList<animalObject>();

  let params = useParams() as { id: string };

  useEffect(() => {
    for (let i = 0; i < animalList.length; i++) {
      if (+params.id === animalList[i].id) {
        setAnimal(animalList[i]);
      }
    }
  }, []);

  const feedAnimal = () => {
    let newFedAnimal = {
      ...animal,
      isFed: true,
      lastFed: new Date().toString(),
    };

    setAnimal(newFedAnimal);
    for (let i = 0; i < animalList.length; i++) {
      if (animalList[i].id === newFedAnimal.id) {
        animalList[i] = newFedAnimal;
        save(animalList);
      }
    }
  };

  return (
    <>
      <StyledTitle>{animal.name}</StyledTitle>
      <StyledTitle>{animal.latinName}</StyledTitle>
      <ImageWrapper>
        <StyledImage src={animal.imageUrl} alt={animal.name} />
      </ImageWrapper>
      <StyledDescription>
        Senast Matad: {animal.lastFed} {animal.isFed.toString()}
      </StyledDescription>
      <ButtonWrapper>
        {animal.isFed ? (
          <FedButton disabled>Redan matad</FedButton>
        ) : (
          <FedButton onClick={feedAnimal}>Mata mig</FedButton>
        )}
      </ButtonWrapper>
      <StyledDescription>
        <p>Information: {animal.longDescription}</p>
        <p>Födelseår: {animal.yearOfBirth}</p>
        <p>Medicin: {animal.medicine} </p>
      </StyledDescription>
      <ButtonWrapper>
        <Link to="/">
          <NavButton>Back to Home Page</NavButton>
        </Link>
      </ButtonWrapper>
    </>
  );
};