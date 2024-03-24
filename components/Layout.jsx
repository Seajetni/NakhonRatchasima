import React, { Children, useRef } from "react";
import { Nav } from "./Nav";
import Footer from "./footer";

export default function Layout(props) {
  const homeRef = useRef(null);

  const scrollToComponent = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <nav ref={homeRef}>
        <Nav />
      </nav>

      <div >{props.children}</div>

      <div >
        <Footer scrollTo={scrollToComponent} homeRef={homeRef} />
      </div>
    </>
  );
}
