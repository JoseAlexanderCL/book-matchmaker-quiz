import { expand, opacity } from "./anim";

const Layout = ({ children, backgroundColor }) => {
  return (
    <div
      style={{
        overflow: "hidden",
        ...expand.animate,
        ...opacity.animate,
        backgroundColor,
      }}
    >
      {children}
    </div>
  );
};

export default Layout;
export { Layout };
