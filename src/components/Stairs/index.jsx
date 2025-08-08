import { motion } from "framer-motion";
import { expand, opacity } from "./anim";

const nbOfColumns = 8;
const columns = Array.from({ length: nbOfColumns });

const columnVariants = {
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

const containerVariants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1 } },
  exit: { transition: { staggerChildren: 0.1, staggerDirection: -1 } },
};

const Layout = ({ children, backgroundColor }) => {
  return (
    <motion.div
      className="stairs"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${nbOfColumns}, 1fr)`,
        minHeight: "100vh", // ensure container spans full viewport height
      }}
      variants={containerVariants}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      {columns.map((_, i) => (
        <motion.div
          key={i}
          variants={columnVariants}
          style={{
            backgroundColor,
            gridColumn: `${i + 1} / span 1`,
            // Give each column visible height and span the full row
            height: "100%",
            gridRow: "1 / -1",
          }}
        />
      ))}
      <div
        style={{
          gridColumn: "1 / -1",
          gridRow: "1",
          position: "relative",
          zIndex: 1,
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default Layout;
export { Layout };
