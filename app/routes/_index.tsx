import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import headImage from '../assets/home/Landscape-HmpstdHth-1.jpg';
import title from '../assets/home/titleLogoTransparent.png'
import landscapes from '../util/imageLoader';
import Nav from "../components/Nav";

import indexStyle from "../styles/index.module.css";

export const meta: MetaFunction = () => {
  return [
    { title: "AeternaMemoriasPhotography" },
    { name: "photography page", content: "Welcome to my photography page!" },
  ];
};

export default function Index() {
  return (
    <div 
      className="font-sans"
      style={{backgroundColor: "#C4BDAC"}}
      >
      <div className="grid cols-1 p-4">
        <div className={ indexStyle.image_container }>
          <img src={ headImage } alt="Head Image" className={ indexStyle.image } />
          <div className= { indexStyle.overlay_text } >
            <img src={ title } className={ indexStyle.titleImage }/>
            <h6>Programmer, Amateur Photographer</h6>
          </div>
        </div>
      </div>
      <Nav />
    </div>
  );
}
