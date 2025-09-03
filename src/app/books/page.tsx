
import { Metadata } from "next"

export const metadata: Metadata ={
  title: "Books"
}

interface BooksProps {
  name: string;
  url: string; 
}

interface ResponseProps {
  results: BooksProps[];
}


export default async function Books(){

     const response = await fetch('https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0')
     const data: ResponseProps = await response.json()

    return(
        <div>
            <h1>Olha os Pokemons!</h1>

            {data.results.map(books =>(

                <div key={books.name}>
                    <h2>{books.name}</h2>
                </div>

            ))}
        </div>
    )
}

