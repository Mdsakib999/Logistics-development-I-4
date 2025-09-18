import { Outlet } from "react-router";

export default function App() {
  return (
    <>
     <div>
        <h1>navbar</h1>
      {/* <Navbar />
      
      <ScrollToTop /> */}
      <Outlet />
      {/* <ScrollToTopButton />
      <Footer /> */}
    </div>
    </>
  );
}
