"use client";

import React from "react"
import { ThemeToggler } from "@/components/theme-toggler";
import Link from "next/link";
import { MiniProfile } from "./profile/mini-profile";
import Tram from "@/assets/transport/tram.svg"
import {HandySvg} from 'handy-svg';
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Menu, Package2 } from "lucide-react";


export const Header = () => {
  return (
    <header className="sticky top-0 flex items-center justify-between h-16 border-b px-4 bg-background">
      <div className="flex items-center gap-3">
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              className="shrink-0 lg:hidden"
            >
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left">
            <nav className="grid gap-6 text-lg font-medium">
              <Link href="/" className="flex items-center gap-3" draggable={false}>
        <img
          src="/logo.svg"
          alt="Логотип"
          className="h-6 w-6"
          draggable={false}
        />
        <h2 className="text-primary font-bold select-none">
          Краснодарский транспорт
        </h2>
        </Link>
        <Link href="/tram" className="text-red-600 items-center gap-2 font-semibold flex">
          <img src="/transport/tram.svg" className="h-5 w-5" alt="" />
          Трамвай
        </Link>
        <Link href="/tram" className="text-blue-600 items-center gap-2 font-semibold flex">
          <img src="/transport/trolleybus.svg" className="h-5 w-5" alt="" />
          Троллейбус
        </Link>
        <Link href="/tram" className="text-green-600 items-center gap-2 font-semibold flex">
          <img src="/transport/bus.svg" className="h-5 w-5" alt="" />
          Автобус
        </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <Link href="/" className="flex items-center gap-3" draggable={false}>
        <img
          src="/logo.svg"
          alt="Логотип"
          className="h-4 w-4 sm:h-6 sm:w-6"
          draggable={false}
        />
        <h2 className="text-primary font-bold select-none text-sm sm:text-base">
          Краснодарский транспорт
        </h2>
        </Link>
        <Link href="/transport/tram" className="text-red-600 items-center gap-2 font-semibold hidden lg:flex">
          <img src="/transport/tram.svg" className="h-5 w-5" alt="" />
          Трамвай
        </Link>
        <Link href="/transport/trolleybus" className="text-blue-600 items-center gap-2 font-semibold hidden lg:flex">
          <img src="/transport/trolleybus.svg" className="h-5 w-5" alt="" />
          Троллейбус
        </Link>
        <Link href="/transport/bus" className="text-green-600 items-center gap-2 font-semibold hidden lg:flex">
          <img src="/transport/bus.svg" className="h-5 w-5" alt="" />
          Автобус
        </Link>
      </div>
      
      <div className="flex gap-3 items-center">
        <ThemeToggler />
        <MiniProfile />
      </div>
    </header>
  );
};
