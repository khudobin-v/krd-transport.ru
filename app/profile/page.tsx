"use client";

import { auth } from "@/auth";
import { Profile } from "@/components/profile/profile";
import FavoriteRoutes from "@/components/transport/favotite-routes";
import { useSession } from "next-auth/react";

const ProfilePage = () => {
	const session = useSession();

	return (
		<>
			<Profile />
			<FavoriteRoutes userId={session.data?.user.id!} />
		</>
	);
};

export default ProfilePage;
