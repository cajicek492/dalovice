

export default function Footer() {
  return (
    <>
    <section className="bg-gray-100 p-3 grid gap-4 grid-cols-3 border-b border-black-600">
        <div className="text-center">Starostka: Eliška Hlaváčová</div>
        <div className="text-center">Adresa Obecního úřadu: Dalovice 94 293 01 MB</div>
        <div className="row-span-3 text-center"> <img src={"./src/img/mapau.png"} alt="My Image" /></div>
        <div className="text-center">Místostarostka: Věra Sehnalová</div>
        <div className="text-center">Telefon: +420 326 723 370</div>
        <div className="text-center">Úřední hodiny: Po: 16:00 – 17:30 hod.</div>
        <div className="text-center">E-mail: urad@obecdalovice.cz</div>
        <div className="text-center col-span-3 divide-y divide-dashed">Oficiální internetové stránky obce Dalovice | vytvořily: Filip Hubler a Filip Mašek</div>
    </section>
    </>
  )
}
