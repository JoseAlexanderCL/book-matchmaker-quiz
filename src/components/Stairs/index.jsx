import { expand, opacity } from "./anim";

const Layout = ({ children }) => {
  return (
    <div
      style={{
        overflow: "hidden",
        ...expand.animate,
        ...opacity.animate,
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
export { Layout };
