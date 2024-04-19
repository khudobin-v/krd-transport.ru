"use server";

import { getFavoriteRoutesByUserId, getRoutesById } from "@/data/routes"; // Assuming data fetching functions are defined here
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import { RouteNumber } from "./route-number";
import { TableCellsMerge } from "lucide-react";
import { RemoveFromFavorite } from "../remove-from-favorite";

interface Props {
  userId: string;
}

export const FavoriteRoutes = async ({ userId }: Props) => {
  const routes = await getFavoriteRoutesByUserId(userId);

  // Fetch full route data using getFullRouteData
  const fullRoutes = await Promise.all(
    routes.map(async (route) => await getFullRouteData(route))
  );

  if (fullRoutes.length) {
    return (
      <Table className="mb-3">
        <TableCaption>Список всех избранных маршрутов</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-12">№</TableHead>
            <TableHead>Имя маршрута</TableHead>
            <TableHead className="w-12">Убрать</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {fullRoutes
            .sort((a, b) => {
              if (a.type > b.type) return 1;
              if (a.type < b.type) return -1;

              return a.number - b.number;
            })
            .map((route) => (
              <TableRow key={route?.id}>
                <TableCell key={`${route?.id}-number`}>
                  <RouteNumber number={route?.number!} type={route?.type!} />
                </TableCell>
                <TableCell key={`${route?.id}-name`} className="font-semibold">
                  {route?.name}
                </TableCell>
                <TableCell className="items-center justify-center flex h-full">
                  <RemoveFromFavorite userId={userId} routeId={route?.id!} />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
    );
  }
  return <h3 className="mt-2 text-foreground/70">Нет избранных маршрутов</h3>;
};

const getFullRouteData = async (route: any) => {
  const currentRoute = await getRoutesById(route.routeId);
  return currentRoute;
};
