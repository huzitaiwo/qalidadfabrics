import { motion } from "framer-motion";

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

export default function Account() {
  return (
    <motion.div
      variants={component}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      Account
    </motion.div>
  );
}
