import { Link } from "react-router-dom";

const Intro = () => {
  return (
    <div className="h-screen w-full flex justify-center items-center">
      <div className="bg-slate-200 px-5 w-5/6 h-1/2 flex flex-col gap-y-15 items-center justify-center rounded-xl">
        <h1 className="text-3xl text-center font-semibold">
          Agendar Audiência Pré-Processual Online
        </h1>
        <Link className="text-lg px-8 py-2 bg-slate-400 rounded-xl" to={"/processual/new"}>
          Agendar
        </Link>
        <Link className="text-lg px-8 py-2 bg-slate-400 rounded-xl" to={"/components"}>
          Página de Componentes
        </Link>
      </div>
    </div>
  );
};

export default Intro;
