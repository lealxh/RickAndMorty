import { QueryClientProvider } from "@tanstack/react-query"
import { ReactQueryDevtools } from '@tanstack/react-query-devtools'
import CharactersList from "./Components/CharactersList/CharactersList";
import { queryClient } from "./query-client/query-client";
export default function App() {
  

  return (
    <QueryClientProvider client={queryClient}>
    <section id="app" className="m-auto 2xl:w-[1300px] py-10 px-5">
    <h2 className="text-3xl text-slate-500 mb-6">
      Characters List
    </h2>
    <CharactersList/>
    </section>
    <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}