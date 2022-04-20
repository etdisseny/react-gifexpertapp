import React from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import "animate.css";
import GifExpertApp from "./GifExpertApp";

const divRoot = document.querySelector("#root");
const root = createRoot(divRoot);
root.render(<GifExpertApp />);
