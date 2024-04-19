"use server";

import { db } from "@/lib/db";
import { RouteType } from "@prisma/client";
import { connect } from "http2";

export const getRoutesById = async (id: string) => {
  try {
    const routes = await db.route.findFirst({
      where: {
        id,
      },
    });
    return routes;
  } catch (error) {
    console.log("[getRoutesBygetRoutesByIdType error]:", error);
    return null;
  }
};

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

export const isFavoriteRoute = async (userId: string, routeId: string) => {
  try {
    const userRoute = await db.userRoute.findFirst({
      where: {
        userId,
        routeId,
      },
    });
    return !!userRoute;
  } catch (error) {
    console.log("[isFavoriteRoute error]:", error);
    return null;
  }
};

export const addToFavorites = async (
  userId: string,
  userEmail: string,
  routeId: string
) => {
  try {
    const userRoute = await db.userRoute.create({
      data: {
        user: {
          connect: { id: userId, email: userEmail },
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
export const removeFromFavorites = async (userId: string, routeId: string) => {
  try {
    const userRoute = await db.userRoute.delete({
      where: {
        userId_routeId: { userId, routeId },
        userId,
      },
    });
    return userRoute;
  } catch (error) {
    console.log("[removeFromFavorites error]:", error);
    return null;
  }
};

export const getFavoriteRoutesByUserId = async (userId: string) => {
  try {
    const routes = await db.userRoute.findMany({
      where: {
        userId,
      },
      orderBy: [
        { route: { type: "asc" } }, // Sort by type first (ascending)
        { route: { number: "asc" } }, // Then sort by number (ascending)
      ],
    });
    return routes;
  } catch (error) {
    console.log("[getFavoriteRoutesByUserId error]:", error);
    return null;
  }
};
