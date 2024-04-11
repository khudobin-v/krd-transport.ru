"use client";

import { RouteNumber } from "@/components/transport/route-number";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Link from "next/link";
import { useEffect, useState } from "react";

const BusPage = () => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <>
      <title>Автобусные маршруты</title>
      <div className="flex items-center gap-2">
        <img src="/transport/bus.svg" className="h-10 w-10" />
        <h1 className="text-3xl text-green-600 font-bold">
          Автобусные маршруты
        </h1>
      </div>
      <div>
        <Table>
          <TableCaption>Список всех автобусных маршрутов</TableCaption>
          <TableHeader>
            <TableRow>
              <TableHead className="w-12">№</TableHead>
              <TableHead>Имя маршрута</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell>
                <Link href="/">
                  <RouteNumber number="1" variant="green" />
                </Link>
              </TableCell>
              <TableCell className="font-semibold">
                <Link href="/">улица Центральная — улица Колхозная</Link>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </>
  );
};

export default BusPage;
