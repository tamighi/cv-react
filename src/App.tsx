import Header from "./Main/Header";
import Skills from "./Main/Skills";

const App = () => {
  return (
    <div id="cv" className="p-4 w-[210mm] h-[297mm] size-[A4]">
      <div className="flex flex-col gap-2">
        <Header />
        <hr />
        <Skills />
      </div>
    </div>
  );
};

export default App;
