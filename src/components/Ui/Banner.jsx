import { Link } from "react-router-dom"

export default function Banner() {
  return (
   <>
   <section className="bg-gray-100 p-5 grid gap-4 grid-cols-7 border-b border-black-600">
    <h1 className="col-span-3 p-3 text-xl">Obec Dalovice</h1>
  <Link to={"/"}><div className="p-3 hover:bg-green-200 text-center ">Domu</div></Link>
  <Link to={"/news"}><div className="p-3 hover:bg-green-200 text-center">Zpravy</div></Link>
  <Link to={"/school"}><div className="p-3 hover:bg-green-200 text-center">Skola</div></Link>
  <Link to={"/contact"}><div className="p-3 hover:bg-green-200 text-center">Kontakt</div></Link>
   </section>
   <p></p>
   </>
   
  )
}
