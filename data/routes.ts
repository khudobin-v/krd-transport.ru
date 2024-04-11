import { db } from "@/lib/db";
import { RouteType } from "@prisma/client";

export const getRoutesByType = async (type: RouteType) => {
  try {
    const routes = await db.route.findMany({
      where: {
        type,
      },
    });
    return routes;
  } catch (error) {
    console.error(error);

    return null;
  }
};
