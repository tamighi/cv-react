import Education from "./main/Education";
import Experience from "./main/Experience";
import Header from "./main/Header";
import Projects from "./main/Projects";
import Skills from "./main/Skills";

const App = () => {
  return (
    <div id="cv" className="p-4 w-[210mm] h-[297mm] size-[A4]">
      <div className="flex flex-col">
        <Header />
        <hr />
        <Skills />
        <hr />
        <Experience />
        <hr />
        <Projects />
        <hr />
        <Education />
      </div>
    </div>
  );
};

export default App;
