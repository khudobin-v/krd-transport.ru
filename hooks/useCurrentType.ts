import { RouteType } from "@prisma/client";
import { useRef } from "react";

export const useCurrentTypeRef = useRef<RouteType | null>(null);
