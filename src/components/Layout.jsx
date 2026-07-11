import Header from "./Header";
import Banner from "./Banner";

function Layout({ children }) {
  return (
    <div className="app">
      <Header />
      <Banner />
      {children}
    </div>
  );
}

export default Layout;
