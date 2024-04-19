"use server";

import { auth } from "@/auth";
import { Profile } from "@/components/profile/profile";
import { FavoriteRoutes } from "@/components/transport/favotite-routes";

const ProfilePage = async () => {
  const session = await auth();

  return (
    <>
      <Profile />
      <FavoriteRoutes userId={session?.user.id!} />
    </>
  );
};

export default ProfilePage;
