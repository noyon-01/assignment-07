import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const MainLayout = () => {
  return (
    <>
      <Header />
      <div className="container mx-auto px-10">
        <Outlet></Outlet>
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;
