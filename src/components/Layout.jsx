import Header from "./Header";
import Banner from "./Banner";
import Navbar from "./Navbar";

function Layout({ children }) {
  return (
    <div className="app">
      <Header />
      <Banner />
      {children}
      <Navbar />
    </div>
  );
}

export default Layout;
