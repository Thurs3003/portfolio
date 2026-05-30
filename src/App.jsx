import { Toaster } from "react-hot-toast";
import Cursor from "./components/Cursor";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import StackSkills from "./components/StackSkills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";

export default function App() {
  return (
    <>
      <LoadingScreen />
      <ScrollProgress />
      <Cursor />
      <Navbar />
      <Hero />
      <StackSkills />
      <Projects />
      <Contact />
      <Footer />
      <Toaster
        position="bottom-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#0D1117",
            color: "#E8EDF2",
            border: "1px solid #1E2A35",
            fontFamily: "DM Mono, monospace",
            fontSize: "13px",
          },
          success: {
            iconTheme: {
              primary: "#00E5FF",
              secondary: "#080C10",
            },
          },
          error: {
            iconTheme: {
              primary: "#FF6B6B",
              secondary: "#080C10",
            },
          },
        }}
      />
    </>
  );
}
