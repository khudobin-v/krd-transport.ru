"use server";

import { auth } from "@/auth";
import { ToFavorite } from "@/components/to-favorite";
import { RouteNumber } from "@/components/transport/route-number";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { getRoutesByType } from "@/data/routes";

import Link from "next/link";

const TrolleybusPage = async () => {
  const routes = await getRoutesByType("trolleybus");
  const session = await auth();

  return (
    <>
      <title>Троллейбусные маршруты</title>
      <div className="flex items-center gap-2">
        <img src="/transport/trolleybus.svg" className="h-10 w-10" />
        <h1 className="text-3xl text-blue-600 font-bold mb-2">
          Троллейбусные маршруты
        </h1>
      </div>

      {routes?.length ? (
        <Table>
          <TableCaption>Список всех троллейбусных маршрутов</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">№</TableHead>
              <TableHead>Имя маршрута</TableHead>
              {session && <TableHead className="w-12">Избранное</TableHead>}
            </TableRow>
          </TableHeader>
          <TableBody>
            {routes?.map((route: any) => (
              <TableRow key={route.id}>
                <TableCell>
                  <Link href="/">
                    <RouteNumber number={route.number} type={route.type} />
                  </Link>
                </TableCell>
                <TableCell className="font-semibold">
                  <Link href="/">{route.name}</Link>
                </TableCell>
                {session && (
                  <TableCell className="items-center justify-center flex h-full">
                    <ToFavorite routeId={route.id} />
                  </TableCell>
                )}
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <h1 className="w-full h-full flex items-center justify-center text-foreground">
          Маршруты не были добавлены
        </h1>
      )}
    </>
  );
};

export default TrolleybusPage;
