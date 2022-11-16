import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import {
  RiDashboardLine,
  RiMotorbikeLine,
  RiTyphoonFill,
} from "react-icons/ri";

export default function Home() {
  return (
    <>
      <div className="min-h-screen grid gird-col-1 lg:grid-cols-6 bg-black">
        {/* SIDEBAR */}
        <div className="col-span-1 border-r border-gray-100 bg-gradient-to-t from-violet-500 to-fuchsia-500 shadow-xl ml-2 rounded-lg">
          {/* LOGO TIPO */}
          <div className=" text-center p-8">
            <h1 className=" uppercase font-bold tracking-[4px]">Tu Logo</h1>
          </div>
          <nav>
            <ul>
              <li>
                <Link href={"/"}>
                  <div className="flex items-center gap-3 p-4 hover:bg-sky-100 transition-colors border-y-2 border-gray-300 rounded uppercase font-semibold  tracking-[2px]">
                    <RiDashboardLine />
                    Dashboard
                  </div>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <div className="flex items-center gap-3 p-4 hover:bg-sky-100 hover:text-white transition-colors border-b-2 border-gray-300 rounded uppercase font-semibold  tracking-[2px]">
                    <RiMotorbikeLine />
                    Motocicletas
                  </div>
                </Link>
              </li>
              <li>
                <Link href={"/"}>
                  <div className="flex items-center gap-3 p-4 hover:bg-sky-100 hover:text-white transition-colors border-b-2 border-gray-300 rounded uppercase font-semibold  tracking-[2px]">
                    <RiTyphoonFill />
                    Bodegas
                  </div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
        {/** content */}
        <div className="col-span-5 p-8 bg-gray-600 ">
          <p className="text-green-300 text-bold text-4xl text-center uppercase tracking-[3px]">
            El flow que los educa Hoy salí con Tiger-Onitsuka Más dañino que el
            azúcar Ella el terri se lo entuca Yo me siento Garu y ella Pucca La
            pelé y casi se 'esnuca
          </p>

          <p className="text-green-300 text-bold text-4xl text-center uppercase tracking-[3px] py-6">
            La puse a empacar color Mientras la espero acá en la pieza Yo soy lo
            más fresa del pedazo, ¿cuál e' esa? El cabezón varias lo besan
            Hicimos algo raro antes no visto Dejo en visto a la que mucho
            estresa La puse a empacar color Mientras la espero acá en la pieza
            Yo soy lo más fresa del pedazo, ¿cuál e' esa? El cabezón varias lo
            besan Hicimos algo raro antes no visto Dejo en visto a la que mucho
            estresa
          </p>
          <p className="text-green-300 text-bold text-4xl text-center uppercase tracking-[3px]">
            La puse a empacar color Mientras la espero acá en la pieza Yo soy lo
            más fresa del pedazo, ¿cuál e' esa? El cabezón varias lo besan
            Hicimos algo raro antes no visto Dejo en visto a la que mucho
            estresa La puse a empacar color Mientras la espero acá en la pieza
            Yo soy lo más fresa del pedazo, ¿cuál e' esa? El cabezón varias lo
            besan Hicimos algo raro antes no visto Dejo en visto a la que mucho
            estresa
          </p>
          <p className="text-green-300 text-bold text-4xl text-center uppercase tracking-[3px]">
            Varios demonios Que me atormentan a diario Mis ángeles pelean y
            dicen "Soy legendario" Gracias a la música ya tengo para el diario
            gracias Matando la liga en estudios y en los escenarios No confió en
            ninguna Es normal que todas fallan Por eso no hay rosas Chocolates
            ni detalles Si no conocen los código' E' mejor que se callen Estamos
            sonando en Medallo, Tabogo y el Valle A Cali llegó y dicen que ¿Cuál
            e' esa? Yo voy lo má' fresa No me toquen, qué pereza Pirlo, diles
            Que el color está en la pieza Aunque crecimo' en el barrio somo' de
            la realeza Sus mujere' empacando el color Las tengo en tanga Si
            fuera amore' no sería el rey de Wakanda Así me vea tranquilo tengo
            mi ganga Y más poderes que Cosmo y Wanda
          </p>
        </div>
      </div>
    </>
  );
}
