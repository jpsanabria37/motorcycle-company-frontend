import Link from "next/link";
import Dashboard from "../../layouts/dashboard";
import { RiAddBoxLine } from "react-icons/ri";

export async function getStaticProps() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/api/cities`);
  const data = await res.json();
  return {
    props: {
      cities: data.data,
    },
  };
}

const cities = ({ cities }) => {
  return (
    <>
      <Dashboard>
        <Link href={"/ciudades/crear"}>
          <button class="mb-4 rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700">
            <RiAddBoxLine />
          </button>
        </Link>

        <div className=" hidden overflow-auto rounded-xl shadow md:block">
          <table className="w-full hover:cursor-auto">
            <thead className="border-b-2 border-gray-200 bg-gray-50">
              <tr>
                <th className="w-20 p-3 text-left text-sm font-semibold tracking-wide">
                  Código postal
                </th>
                <th className="p-3 text-left text-sm font-semibold tracking-wide">
                  Nombre
                </th>
                <th className="w-36 p-3 text-left text-sm font-semibold tracking-wide">
                  Provincia
                </th>
                <th className="w-20 p-3 text-left text-sm font-semibold tracking-wide">
                  Residentes
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100">
              {cities?.map((city) => (
                <tr>
                  <td className=" whitespace-nowrap p-3 text-sm text-gray-700">
                    {city.zip_code}
                  </td>

                  <td className=" whitespace-nowrap p-3 text-sm text-gray-700">
                    <Link href={`/ciudades/${city.id}`}>
                      <span className="hover:cursor-pointer">{city.name}</span>
                    </Link>
                  </td>

                  <td className=" whitespace-nowrap p-3 text-sm text-gray-700">
                    {city.province}
                  </td>
                  <td className=" whitespace-nowrap p-3 text-sm text-gray-700">
                    {" "}
                    {city.residents}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:hidden ">
          {cities?.map((city) => (
            <div className="space-y-3 rounded-lg bg-white p-4 shadow">
              <div className="flex items-center space-x-2 text-sm">
                <div className="whitespace-nowrap text-sm text-gray-600">
                  {city.zip_code}
                </div>
                <div className="whitespace-nowrap text-sm text-gray-600">
                  {city.name}
                </div>
              </div>
              <div className="whitespace-nowrap text-sm text-gray-600">
                {city.province}
              </div>
              <div className="whitespace-nowrap text-sm text-black">
                {city.residents}
              </div>
            </div>
          ))}
        </div>
      </Dashboard>
    </>
  );
};

export default cities;
