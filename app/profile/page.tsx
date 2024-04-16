"use client"

import { Profile } from "@/components/profile/profile";
import { useProfile } from "@/hooks/useProfile";

const ProfilePage = () => {
  const { userRole } = useProfile();
  return (
    <>
      <Profile />
    </>
  );
};

export default ProfilePage;
