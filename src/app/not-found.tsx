import Link from "next/link"

import { Metadata } from "next"

export const metadata: Metadata ={
  title: "Erro!"
}


export default function NotFound()
{
    return(
        <div className="flex flex-col items-center justify-center h-64">
            <h1 className="text-xl font-bold">
                Erro 404 || Página não encontrada
            </h1>
            
            <Link href="/">
                Volte para a Home
            </Link>
        </div>
    )
}