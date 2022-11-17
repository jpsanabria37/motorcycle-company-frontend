import Dashboard from "../../../layouts/dashboard";

export async function getStaticProps({ params }) {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/cities/${params.cid}`
  );
  const data = await res.json();
  return {
    props: {
      city: data.data,
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/cities/`);

  const data = await res.json();

  return {
    paths: data.data.map((city) => ({ params: { cid: String(city.id) } })),
    fallback: false,
  };
}

const CityDetail = ({ city }) => {
  return (
    <>
      <Dashboard></Dashboard>
    </>
  );
};

export default CityDetail;
