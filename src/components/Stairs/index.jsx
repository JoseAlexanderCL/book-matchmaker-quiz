import { motion } from "framer-motion";
import { expand, opacity } from "./anim";

const nbOfColumns = 8;
const columns = Array.from({ length: nbOfColumns });

// Column variants computed inside component to support different modes

const containerVariants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.06 } },
  exit: { transition: { staggerChildren: 0.06, staggerDirection: -1 } },
};

const Layout = ({ children, backgroundColor, revealOnEnter = false }) => {
  // Compute variants depending on the direction of the transition
  const columnVariants = revealOnEnter
    ? {
        initial: { height: "100%", opacity: 1 },
        animate: {
          height: 0,
          opacity: 1,
          transition: { duration: 0.65, ease: [0.22, 0.61, 0.36, 1] },
        },
        // Ensure columns expand to full height when exiting
        exit: { height: "100%" },
      }
    : {
        initial: { ...expand.initial, ...opacity.initial },
        animate: { ...expand.animate, ...opacity.animate },
        exit: {
          ...expand.exit,
          ...opacity.exit,
          transition: {
            ...expand.exit.transition,
            ...opacity.exit.transition,
          },
        },
      };
  return (
    <motion.div
      className="stairs"
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${nbOfColumns}, 1fr)`,
        height: "100vh", // ensure container spans full viewport height
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
              height: "100%",
              gridRow: "1 / -1",
              position: "relative",
              zIndex: 10,
              pointerEvents: "none",
              transformOrigin: "bottom",
              willChange: "height, opacity",
            }}
        />
      ))}
      <div
        style={{
          gridColumn: "1 / -1",
          gridRow: "1",
          position: "relative",
          zIndex: 0,
        }}
      >
        {children}
      </div>
    </motion.div>
  );
};

export default Layout;
export { Layout };
