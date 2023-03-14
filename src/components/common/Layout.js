// components/layout.js
import Footer from "./Footer";
import Navbar from "./Navbar";

export default function Layout({ children }) {
  return (
    <div className="max-w-[1100px] mx-auto">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
