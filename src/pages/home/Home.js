// react packages
import { motion } from "framer-motion";

// styles
import "./Home.css";

//components
import Tag from "../../components/tag/Tag";
import Item from "../../components/item/Item";

// images
import banner from "../../assets/brand___multiple.png";
import design from "../../assets/design.png";
import material1 from "../../assets/material01.png";
import material2 from "../../assets/material02.png";
import material3 from "../../assets/material03.png";
import Tab from "../../components/tab/Tab";

const component = {
  hidden: { opacity: 0, x: "100vw" },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      type: "tween",
      duration: 0.5,
      delay: 0.5,
    },
  },
  exit: {
    x: "-100vw",
    transition: { ease: "easeInOut" },
  },
};

export default function Home() {
  return (
    <motion.div
      className="Home"
      variants={component}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <h1>Qalidad.Fabrics</h1>
      <img className="banner" src={banner} alt="banner" />
      <section className="section__01">
        <Tag number="01" collection="new release" />
        <h2>
          We provide fabric materials in different varieties and accessories to
          compliment your attires to the latter
        </h2>
        <div className="section__01-grid">
          <Item
            // color="Light navy blue"
            // name="Fanta jean pant"
            // price="3,500"
            src={material1}
          />
          <Item
            // color="Light navy blue"
            // name="Fanta jean pant"
            // price="3,500"
            src={material2}
          />
          <Item
            // color="Light navy blue"
            // name="Fanta jean pant"
            // price="3,500"
            src={material3}
          />
        </div>
      </section>
      <section className="section__02">
        <div className="design">
          <img src={design} alt="design material" />
        </div>
        <div className="section__02-content">
          <Tag number="02" collection="intuitive design" />
          <h2>See how we're using material technology to build the future</h2>
        </div>
      </section>
      <section className="section__03">
        <Tag number="03" collection="collections" />
        <Tab />
      </section>
    </motion.div>
  );
}
