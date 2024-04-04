"use client";

import { useSession } from "next-auth/react";

const useProfile = () => {
	const session = useSession();
	const profile = {
		name: session.data?.user?.name,
		email: session.data?.user?.email,
		image: session.data?.user?.image,
	};
	const status = session.status;
	return { profile, status };
};

export default useProfile;
