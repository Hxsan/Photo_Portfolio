import type { LinksFunction, MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

import { getLandscape, getAlbania } from '../util/imageLoader';
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
          <img src='assets/home/Landscape-HmpstdHth-1.jpg' alt="Head Image" className={ indexStyle.image } />
          <div className= { indexStyle.overlay_text } >
            <img src='/assets/home/titleLogoTransparent.png' className={ indexStyle.titleImage }/>
            <h6>Programmer | Amateur Photographer</h6>
          </div>
        </div>
        <div className={ indexStyle.scroll_container }>
        <div className={ indexStyle.column }>
          <img src= { getLandscape(1) } className={ indexStyle.image }/>
        </div>
        <div className={ indexStyle.column }>
        <img src= { getAlbania(28) } className={ indexStyle.image }/>
        </div>
    </div>
      </div>
      <Nav />
    </div>
  );
}
