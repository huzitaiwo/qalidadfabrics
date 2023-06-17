// pacakges
import { useRef } from "react";
import { NavLink } from "react-router-dom";
import { motion, useCycle } from "framer-motion";

// styles
import "./Navbar.css";

// components
import { NavbarToggler } from "./NavbarToggler";
import { useDimensions } from "./use-dimensions";
import NavbarItem from "./NavbarItem";

// images
import Logo from "../../assets/brand__logo.png";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    PointerEvent: "all",
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    PointerEvent: "none",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40,
    },
  },
};

export default function Navbar({ screenWidth }) {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);
  const date = new Date();

  return (
    <motion.div
      className="Navbar"
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      {/* {screenWidth < 651 && (
        <>
          <motion.div className="background" variants={sidebar} />
          <NavbarToggler toggle={() => toggleOpen()} />
          <NavbarItem toggle={() => toggleOpen()} />
        </>
      )} */}
      {screenWidth > 650 && (
        <>
          <ul className="navbar___links">
            <li>
              <NavLink to="/">Top {date.getFullYear()}</NavLink>
            </li>
            <li>
              <NavLink to="/collection">Collection</NavLink>
            </li>
            <li>
              <NavLink>Qalidad Designer</NavLink>
            </li>
          </ul>
          <div className="navbar___logo">
            <img src={Logo} alt="logo" />
          </div>
          <ul className="navbar___actions">
            <li>
              <NavLink to="/cart">
                <span>My cart</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/me">
                <span>Account</span>
              </NavLink>
            </li>
          </ul>
        </>
      )}
    </motion.div>
  );
}
