import { Link } from "react-router-dom"
export default function NotFound() {
  return (
    <>
      <main className="grid h-screen place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-base font-semibold text-teal-500">404</p>
          <h1 className="mt-4 text-5xl font-semibold tracking-tight text-balance text-slate-700 sm:text-7xl">
            Página Não Encontrada
          </h1>
          <p className="mt-6 text-lg text-pretty text-slate-400 sm:text-xl/8">
            Sinto muito, a página que você tentou acessar não foi encontrada.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to={-1}
              className="rounded-md bg-teal-500 px-8 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-teal-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-500"
            >
              Retornar
            </Link>
           
          </div>
        </div>
      </main>
    </>
  )
}
