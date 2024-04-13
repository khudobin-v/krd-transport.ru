"use server";

import { auth } from "@/auth";
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

const TramPage = async () => {
  const routes = await getRoutesByType("tram");

  return (
    <>
      <title>Трамвайные маршруты</title>
      <div className="flex items-center gap-2">
        <img src="/transport/tram.svg" className="h-10 w-10" />
        <h1 className="text-3xl text-red-600 font-bold mb-2">
          Трамвайные маршруты
        </h1>
      </div>

      {routes?.length ? (
        <Table>
          <TableCaption>Список всех трамвайных маршрутов</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">№</TableHead>
              <TableHead>Имя маршрута</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {routes?.map((route: any) => (
              <TableRow key={route.id}>
                <TableCell>
                  <Link href="/">
                    <RouteNumber
                      number={route.number}
                      variant={
                        route.type === "bus"
                          ? "green"
                          : route.type === "tram"
                            ? "red"
                            : "blue"
                      }
                    />
                  </Link>
                </TableCell>
                <TableCell className="font-semibold">
                  <Link href="/">{route.name}</Link>
                </TableCell>
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

export default TramPage;
