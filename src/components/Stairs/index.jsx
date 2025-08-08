import { motion } from "framer-motion";
import { expand, opacity } from "./anim";

const nbOfColumns = 8;

const variants = {
  initial: { ...expand.initial, ...opacity.initial },
  animate: {
    ...expand.animate,
    ...opacity.animate,
    transition: {
      ...expand.animate.transition,
      ...opacity.animate.transition,
    },
  },
  exit: {
    ...expand.exit,
    ...opacity.exit,
    transition: {
      ...expand.exit.transition,
      ...opacity.exit.transition,
    },
  },
};

const Layout = ({ children, backgroundColor }) => {
  return (
    <motion.div
      className="stairs"
      style={{
        backgroundColor,
        display: "grid",
        gridTemplateColumns: `repeat(${nbOfColumns}, 1fr)`,
      }}
      variants={variants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {children}
    </motion.div>
  );
};

export default Layout;
export { Layout };
