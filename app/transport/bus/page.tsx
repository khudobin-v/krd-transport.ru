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

const BusPage = async () => {
  const routes = await getRoutesByType("bus");
  const session = await auth();

  return (
    <>
      <title>Автобусные маршруты</title>
      <div className="flex items-center gap-2">
        <img src="/transport/bus.svg" className="h-10 w-10" />
        <h1 className="text-3xl text-green-600 font-bold">
          Автобусные маршруты
        </h1>
        <h1>{JSON.stringify(session)}</h1>
      </div>

      <Table>
        <TableCaption>Список всех автобусных маршрутов</TableCaption>
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
    </>
  );
};

export default BusPage;
