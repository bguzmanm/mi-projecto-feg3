import React from "react";

import { render, screen } from "@testing-library/react";
import Saludo from "../components/Saludo";
import { test, expect } from "@jest/globals";

import "@testing-library/jest-dom";

test("Muestra el mensaje de saludo con el nombre proporcionado", () => {
  render(<Saludo nombre="Juan" />);

  expect(screen.getByText("Hola Juanito 👋🏼")).toBeInTheDocument();
});

test("Otro test que será interesante de implementar", () => {
  expect(true).toBeTruthy();
});
