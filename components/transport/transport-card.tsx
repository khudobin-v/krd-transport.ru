"use client";

import { RouteType } from "@prisma/client";
import TramIcon from "@/svg/transport/tram";
import TrolleybusIcon from "@/svg/transport/trolleybus";
import BusIcon from "@/svg/transport/bus";
import Link from "next/link";
import { useQuery } from "@tanstack/react-query";
import { getRoutesByType } from "@/data/routes";
import { Skeleton } from "../ui/skeleton";

interface Props {
	type: RouteType;
}

export const TransportCard = ({ type }: Props) => {
	const { isPending, data } = useQuery({
		queryKey: ["routes", type],
		queryFn: async () => await getRoutesByType(type),
	});
	return (
		<Link
			href={`/transport/${type}`}
			className={`text-white h-32 rounded-xl relative group hover:bg-red-500 transition-all bg-${type === "tram" ? "red" : type === "trolleybus" ? "blue" : "green"}-600 hover:bg-${type === "tram" ? "red" : type === "trolleybus" ? "blue" : "green"}-500`}
		>
			<div className='absolute top-4 left-4 flex items-center gap-2'>
				{type === "tram" ? (
					<TramIcon className='fill-white/90 h-8 w-8 group-hover:fill-white/100' />
				) : type === "trolleybus" ? (
					<TrolleybusIcon className='fill-white/90 h-8 w-8 group-hover:fill-white/100' />
				) : (
					<BusIcon className='fill-white/90 h-8 w-8 group-hover:fill-white/100' />
				)}
				<h3 className='text-white/90 font-semibold text-xl group-hover:text-white/100'>
					{type === "tram"
						? "Трамвайные маршруты"
						: type === "trolleybus"
							? "Троллейбусные маршруты"
							: "Автобусные маршруты"}
				</h3>
			</div>
			{isPending ? (
				<Skeleton className='h-6 w-20 absolute bottom-4 left-4' />
			) : (
				<p className='text-white/50 absolute bottom-4 left-4'>
					{data?.length} маршрутов
				</p>
			)}
		</Link>
	);
};
