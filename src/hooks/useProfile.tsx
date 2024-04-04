import { useSession } from "next-auth/react";

const useProfile = () => {
	const session = useSession();
	const name = session.data?.user?.name;
	const email = session.data?.user?.name;
	const image = session.data?.user?.name;
	const status = session.status;
	return { name, email, image, status };
};

export default useProfile;
