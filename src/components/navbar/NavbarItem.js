// packages
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

// images
import Logo from "../../assets/brand__logo.png";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 },
    },
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 },
    },
  },
};

const parentVariant = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 },
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 },
  },
};

export default function NavbarItem({ toggle }) {
  const date = new Date();

  return (
    <div className="navbar___item">
      <motion.ul className="navbar___links" variants={parentVariant}>
        <motion.li
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggle}
        >
          <NavLink to="/">Top {date.getFullYear()}</NavLink>
        </motion.li>
        <motion.li
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggle}
        >
          <NavLink to="/collection">Collection</NavLink>
        </motion.li>
        <motion.li
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggle}
        >
          <NavLink>Qalidad Designer</NavLink>
        </motion.li>
      </motion.ul>
      <motion.div
        className="navbar___logo"
        variants={variants}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        onClick={toggle}
      >
        <img src={Logo} alt="logo" />
      </motion.div>
      <ul className="navbar___actions">
        <motion.li
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggle}
        >
          <NavLink to="/cart">
            <span>My cart</span>
          </NavLink>
        </motion.li>
        <motion.li
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={toggle}
        >
          <NavLink to="/me">
            <span>Account</span>
          </NavLink>
        </motion.li>
      </ul>
    </div>
  );
}
