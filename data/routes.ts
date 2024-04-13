import { db } from "@/lib/db";
import { RouteType } from "@prisma/client";
import { connect } from "http2";

export const getRoutesByType = async (type: RouteType) => {
  try {
    const routes = await db.route.findMany({
      where: {
        type,
      },
    });
    return routes;
  } catch (error) {
    console.log("[getRoutesByType error]:", error);
    return null;
  }
};

export const addToFavorites = async (userId: string, routeId: string) => {
  try {
    const userRoute = await db.userRoute.create({
      data: {
        user: {
          connect: { id: userId },
        },
        route: {
          connect: { id: routeId },
        },
      },
    });
    return userRoute;
  } catch (error) {
    console.log("[addToFavorites error]:", error);
    return null;
  }
};