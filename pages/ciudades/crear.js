import Dashboard from "../../layouts/dashboard";
import { use, useState } from "react";
import { useRouter } from "next/router";

const creeateForm = () => {
  const router = useRouter();
  const [cityName, setCityName] = useState("");
  const [cityZipCode, setCityZipCode] = useState("");
  const [cityResidents, setCityResidents] = useState("");
  const [cityProvince, setCityProvince] = useState("");

  const [submitting, setSubmitting] = useState(false);

  const [errors, setErrors] = useState([]);

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/cities`,
      {
        method: "POST",
        headers: {
          accept: "application/json",
          "content-type": "application/json",
        },
        body: JSON.stringify({
          name: cityName,
          zip_code: cityZipCode,
          province: cityProvince,
          residents: cityResidents,
        }),
      }
    );

    if (res.ok) {
      setErrors([]);
      setCityName("");
      setCityZipCode("");
      setCityResidents("");
      setCityProvince("");

      return router.push("/ciudades");
    }

    const data = await res.json();
    setErrors(data.errors);
    setSubmitting(false);
  }
  return (
    <>
      <Dashboard>
        <form
          class="my-24 mx-auto max-w-3xl space-y-6 px-4"
          onSubmit={handleSubmit}
        >
          <h1 className=" text-3xl font-semibold"> Crear ciudad</h1>

          <input
            className="block w-full rounded border border-gray-400 py-2 px-4 focus:border-teal-500 focus:outline-none"
            id="grid--name"
            type="text"
            onChange={(e) => setCityName(e.target.value)}
            value={cityName}
            disabled={submitting}
            placeholder="Medellín"
          />

          <input
            className="block w-full rounded border border-gray-400 py-2 px-4 focus:border-teal-500 focus:outline-none"
            id="grid-zip-code"
            type="text"
            onChange={(e) => setCityZipCode(e.target.value)}
            value={cityZipCode}
            disabled={submitting}
            placeholder="Ej: 201102"
          />

          <input
            className="block w-full rounded border border-gray-400 py-2 px-4 focus:border-teal-500 focus:outline-none"
            id="grid-province"
            type="text"
            onChange={(e) => setCityProvince(e.target.value)}
            value={cityProvince}
            disabled={submitting}
            placeholder="Antioquia"
          />
          <input
            className="block w-full rounded border border-gray-400 py-2 px-4 focus:border-teal-500 focus:outline-none"
            id="grid-residents"
            type="text"
            onChange={(e) => setCityResidents(e.target.value)}
            value={cityResidents}
            disabled={submitting}
            placeholder="Ej: 20000"
          />

          <button
            type="submit"
            disabled={submitting}
            class="mb-4 rounded-full bg-blue-500 py-2 px-4 font-bold text-white hover:bg-blue-700"
          >
            {submitting ? "Enviando ..." : "Enviar"}
          </button>
          {errors && <span>{errors.name}</span>}
        </form>
      </Dashboard>
    </>
  );
};

export default creeateForm;
