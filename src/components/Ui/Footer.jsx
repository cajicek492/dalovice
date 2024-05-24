export default function Footer() {
  return (
    <>
      <section className="bg-gray-100 p-3 grid gap-4 grid-cols-3 border-b border-black-600">
        <div className="text-center text-base sm:text-sm md:text-lg">
          Starostka: Eliška Hlaváčová
        </div>
        <div className="text-center text-base sm:text-sm md:text-lg">
          Adresa Obecního úřadu: Dalovice 94 293 01 MB
        </div>
        <div className="row-span-3 text-center">
          {" "}
          <img src={"./src/img/mapau.png"} alt="My Image" />
        </div>
        <div className="text-center text-base sm:text-sm md:text-lg">
          Místostarostka: Věra Sehnalová
        </div>
        <div className="text-center text-base sm:text-sm md:text-lg">
          Telefon: +420 326 723 370
        </div>
        <div className="text-center text-base sm:text-sm md:text-lg">
          Úřední hodiny: Po: 16:00 – 17:30 hod.
        </div>
        <div className="text-center text-base sm:text-sm md:text-lg">
          E-mail: urad@obecdalovice.cz
        </div>
        <div className="text-center col-span-3 divide-y divide-dashed text-base sm:text-sm md:text-lg">
          Oficiální internetové stránky obce Dalovice | vytvořily: Filip Hubler
          a Filip Mašek
        </div>
      </section>
    </>
  );
}
