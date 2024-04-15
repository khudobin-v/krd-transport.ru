import { CurrentDate } from "@/components/date/current-date";
import Logo from "@/svg/logo";
import Bus from "@/svg/transport/bus";
import Tram from "@/svg/transport/tram";
import Trollebyus from "@/svg/transport/trolleybus";
import Link from "next/link";

const HomePage = () => {
  return (
    <>
      <title>Краснодарский транспорт</title>
      <div className="flex flex-col gap-5">
        <div className="flex flex-row items-center gap-3">
          <Logo className="h-8 w-8 stroke-primary" />
          <h1 className="text-primary font-semibold text-3xl">
            Краснодарский транспорт
          </h1>
        </div>
        <CurrentDate />
        <div className="grid sm:grid-cols-3 grid-rows-3 gap-2">
          <Link
            href="/transport/tram"
            className="bg-red-600 text-white h-32 rounded-xl relative group hover:bg-red-500 transition-all"
          >
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <Tram className="fill-white/90 h-8 w-8 group-hover:fill-white/100" />
              <h3 className="text-white/90 font-semibold text-xl group-hover:text-white/100">
                Трамвай
              </h3>
            </div>
          </Link>
          <Link
            href="/transport/trolleybus"
            className="bg-blue-600 text-white h-32 rounded-xl relative group hover:bg-blue-500 transition-all"
          >
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <Trollebyus className="fill-white/90 h-8 w-8 group-hover:fill-white/100" />
              <h3 className="text-white/90 font-semibold text-xl group-hover:text-white/100">
                Троллейбус
              </h3>
            </div>
          </Link>
          <Link
            href="/transport/bus"
            className="bg-green-600 text-white h-32 rounded-xl relative group hover:bg-green-500 transition-all"
          >
            <div className="absolute top-4 left-4 flex items-center gap-2">
              <Bus className="fill-white/90 h-8 w-8 group-hover:fill-white/100" />
              <h3 className="text-white/90 font-semibold text-xl group-hover:text-white/100">
                Автобус
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default HomePage;
