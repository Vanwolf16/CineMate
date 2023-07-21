import { Link } from "react-router-dom";
import Card from "../components/Card";

export default function MovieList() {
  return (
    <main>
         <section className="max-w-7xl mx-auto py-7">
          <div className="flex justify-start flex-wrap ">

            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />

          </div>
         </section>
      
    </main>
  )
}
