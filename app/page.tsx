"use client";

import { CurrentDate } from "@/components/date/current-date";
import { TransportCard } from "@/components/transport/transport-card";
import { getRoutesByType } from "@/data/routes";
import Logo from "@/svg/logo";
import Bus from "@/svg/transport/bus";
import Tram from "@/svg/transport/tram";
import Trollebyus from "@/svg/transport/trolleybus";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";

const HomePage = () => {
	const { isPending, data } = useQuery({
		queryKey: ["routes"],
		queryFn: () => getRoutesByType("tram"),
	});
	return (
		<>
			<title>Краснодарский транспорт</title>
			<div className='flex flex-col gap-5'>
				<div className='flex flex-row items-center gap-3'>
					<Logo className='h-8 w-8 stroke-primary' />
					<h1 className='text-primary font-semibold text-3xl'>
						Краснодарский транспорт
					</h1>
				</div>
				<CurrentDate />
				<div className='grid sm:grid-cols-3 grid-rows-3 gap-2'>
					<TransportCard type='tram' />
					<TransportCard type='trolleybus' />
					<TransportCard type='bus' />
				</div>
			</div>
		</>
	);
};

export default HomePage;
