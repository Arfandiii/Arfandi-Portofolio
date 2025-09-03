import Navbar from "./component/Navbar/Navbar";
import Home from "./component/Home/Home";
import Project from "./component/Project/Project";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Cursor from "./component/Cursor";
function App() {
  return (
    <>
      <div className="text-zinc-800 dark:text-zinc-200 antialiased selection:bg-[#e44c99] selection:text-[#01a923]">
        <Cursor />
        <Navbar />
        <Home />
        <About />
        <Project />
        <Contact />
      </div>
    </>
  );
}

export default App;
