import Header from "./Main/Header";

const App = () => {
  return (
    <div id="cv" className="p-4 w-[210mm] h-[297mm] size-[A4]">
      <div className="flex flex-col justify-between">
        <Header />
      </div>
    </div>
  );
};

export default App;
