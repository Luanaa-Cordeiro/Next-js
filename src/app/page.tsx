import { Metadata } from "next"
import { FormQuest } from '../components/FormQuest'


export const metadata: Metadata ={
  title: "Lybooks"
}

export default function Home(){
  return(
    <FormQuest/>
  )
}