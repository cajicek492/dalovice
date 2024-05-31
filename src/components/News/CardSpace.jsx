

export default function CardSpace(props) {
  return (
    <>
    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

        {props.children}
    </section>
    </>
  )
}
