import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <div className="container mx-auto">
        <Header />
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
