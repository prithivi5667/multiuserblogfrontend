//import { isAuth, signout } from "../../../actions/auth";
//import Router from "next/router";
import Link from "next/link";
//import Search from "../../blog/Search";

//import DrawerToggleButton from "../SideDrawer/DrawerToggleButton";

const Hero = () => {
  return (
    <>
    <section className="hero hero-container">
      <div className="slider-bg">
      <h2 className="hero__title">Get smarter about what you read.</h2>

      </div>
      <p className="para1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
      <div className="mainfoot">
      <Link href="/blogs">
    <a><button className="btn1"> Visit All Articles</button></a>
  </Link>
  </div>
    </section>
    
  </>
  );
};

export default Hero;
