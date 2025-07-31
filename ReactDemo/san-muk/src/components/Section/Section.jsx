import FetchUsers from "../FethUsers/FetchUsers";

function Section() {
  return (
    <>
      <section className="pt-5 pl-5">
        <h3 className="text-2xl font-bold mb-4 text-gray-800">
          List Of All the Users Enrolled:
        </h3>

        <FetchUsers />
      </section>
    </>
  );
}

export default Section;
