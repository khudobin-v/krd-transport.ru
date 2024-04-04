"use client";

import useProfile from "@/hooks/useProfile";
import Image from "next/image";

const HomePage = () => {
	const { profile } = useProfile();
	return <img src={profile.image!} height={100} width={100} alt="" />;
};

export default HomePage;
