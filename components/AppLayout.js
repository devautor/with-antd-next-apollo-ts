/**
 * Every page rendered will be a child of this component.
 */
import Meta from "./Meta";
import "../assets/styles.less";
import { Layout } from "antd";

const AppLayout = props => (
  <div>
    <Meta />
    <Layout style={{ minHeight: "100%", height: "100vh" }}>
      <Layout hasSider={true} style={{ height: "100%", marginTop: "64px" }}>
        {props.children}
      </Layout>
    </Layout>
  </div>
);

export default AppLayout;
