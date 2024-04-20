"use client";

import { getAllRoutes, getRoutesByType } from "@/data/routes";
import { QueryClient, useQuery } from "@tanstack/react-query";
import {
	Table,
	TableBody,
	TableCaption,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@/components/ui/table";
import { useSession } from "next-auth/react";
import { RouteNumber } from "@/components/transport/route-number";
import { ToFavorite } from "@/components/to-favorite";
import { Skeleton } from "../ui/skeleton";
import { useRouter } from "next/navigation";
import { RouteType } from "@prisma/client";

interface Props {
	type?: "tram" | "trolleybus" | "bus";
}

interface Route {
	id: string;
	number: string;
	name: string;
	href: string;
	type: RouteType;
	users?: any;
}

export const Routes = ({ type }: Props) => {
	const { isPending, data } = useQuery({
		queryKey: ["routes", type],
		queryFn: async () => {
			if (type) {
				return await getRoutesByType(type);
			}
			return await getAllRoutes();
		},
		staleTime: 0,
		refetchOnMount: true,
	});

	const session = useSession();

	const { push } = useRouter();

	return (
		<div>
			<Table className='mb-2'>
				<TableCaption>
					{isPending || !data ? (
						<p>Загрузка маршрутов</p>
					) : (
						<p>
							Список всех{" "}
							{type === "tram"
								? "трамвайных"
								: type === "trolleybus"
									? "троллейбусных"
									: "автобусных"}{" "}
							маршрутов
						</p>
					)}
				</TableCaption>
				<TableHeader>
					<TableRow>
						<TableHead className='w-12'>№</TableHead>
						<TableHead>Маршрут</TableHead>
						{session.data && <TableHead className='w-16'>Действие</TableHead>}
					</TableRow>
				</TableHeader>

				{isPending ? (
					<TableBody>
						<TableRow className='h-full'>
							<TableCell>
								<RouteNumber />
							</TableCell>
							<TableCell>
								<Skeleton className='w-full h-6 rounded-[8px]' />
							</TableCell>
							{session.data && (
								<TableCell className='flex items-center justify-center w-full'>
									<div className='p-2'>
										<Skeleton className='w-6 h-6 rounded-[8px]' />
									</div>
								</TableCell>
							)}
						</TableRow>
						<TableRow className='h-full'>
							<TableCell>
								<RouteNumber />
							</TableCell>
							<TableCell>
								<Skeleton className='w-full h-6 rounded-[8px]' />
							</TableCell>
							{session.data && (
								<TableCell className='flex items-center justify-center w-full'>
									<div className='p-2'>
										<Skeleton className='w-6 h-6 rounded-[8px]' />
									</div>
								</TableCell>
							)}
						</TableRow>
						<TableRow className='h-full'>
							<TableCell>
								<RouteNumber />
							</TableCell>
							<TableCell>
								<Skeleton className='w-full h-6 rounded-[8px]' />
							</TableCell>
							{session.data && (
								<TableCell className='flex items-center justify-center w-full'>
									<div className='p-2'>
										<Skeleton className='w-6 h-6 rounded-[8px]' />
									</div>
								</TableCell>
							)}
						</TableRow>
					</TableBody>
				) : (
					<TableBody>
						{data?.map((route: Route) => (
							<TableRow
								key={route.id}
								onClick={() => push(route.href)}
								className='cursor-pointer'
							>
								<TableCell>
									<RouteNumber number={route.number} type={route.type} />
								</TableCell>
								<TableCell>
									<p className='font-semibold'>{route.name}</p>
								</TableCell>
								{session.data && (
									<TableCell className='flex items-center justify-center w-full'>
										<ToFavorite routeId={route.id} />
									</TableCell>
								)}
							</TableRow>
						))}
					</TableBody>
				)}
			</Table>
		</div>
	);
};
