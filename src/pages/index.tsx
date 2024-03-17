import Problemtop from "@/components/Problemtop/Problemtop";
import Head from "next/head";
import ProblemsList from "@/components/ProblemsList/problemsList";

export default function Home() {
  return (
      <>

        <main className="bg-background-blue min-h-screen">
              <Problemtop/>
              <h1
                className='text-2xl text-center text-gray-700 dark:text-gray-400 font-medium  mt-10 mb-5'>
                  Iniciemos la aventura 🎼 etude-1: Bambuco
              </h1>

              <div className='relative overflow-x-auto mx-auto px-6 pb-10'>
              <table className='text-sm text-left text-gray-500 dark:text-gray-400 sm:w-7/12 w-full max-w-[1200px] mx-auto'>
                <thead className='text-xs text-gray-700 uppercase dark:text-gray-400 border-b '>
                  <tr>
                    <th scope='col' className='px-1 py-3 w-0 font-medium'>
                      Estado
                    </th>
                    <th scope='col' className='px-6 py-3 w-0 font-medium'>
                      Titulo
                    </th>
                    <th scope='col' className='px-6 py-3 w-0 font-medium'>
                      Dificultad
                    </th>

                    <th scope='col' className='px-6 py-3 w-0 font-medium'>
                      Categoria
                    </th>
                    <th scope='col' className='px-6 py-3 w-0 font-medium'>
                      Pista
                    </th>
                  </tr>
                </thead>
                <ProblemsList/>
              </table>
              </div>
        </main>
      </>    
  );
}
