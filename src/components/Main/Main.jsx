import React from 'react' ;
import Promo from "../Landing/Promo/Promo";
import AboutProject from "../Landing/AboutProject/AboutProject";
import Techs from "../Landing/Techs/Techs";
import AboutMe from "../Landing/AboutMe/AboutMe" ;

function Main() {
  return (
    <main className="main">
      <Promo />
      <AboutProject />
      <Techs />
      <AboutMe />
    </main>
  );
}

export default Main;