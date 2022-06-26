import { gql, useQuery } from "@apollo/client"
import { useEffect } from "react"
import { client } from "./lib/apollo"

const GET_LESSONS_QUERY = gql`
  query{
    lessons{
      id
      title
    }
  }
`
interface Lessons{
  id: string;
  title:string;
}

function App() {
  const { data } = useQuery(GET_LESSONS_QUERY)

  return (
   <ul>
     {data?.lessons.map((lessons:Lessons) => {
       return <li key={lessons.id}>{lessons.title}</li>
     })}
   </ul>
  )
}

export default App
