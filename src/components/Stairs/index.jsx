import { expand, opacity } from "./anim";

const nbOfColumns = 8;

const Layout = ({ children, backgroundColor }) => {
  return (
    <div
      style={{
        overflow: "hidden",
        ...expand.animate,
        ...opacity.animate,
        backgroundColor,
        display: "grid",
        gridTemplateColumns: `repeat(${nbOfColumns}, 1fr)`,
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
export { Layout };
