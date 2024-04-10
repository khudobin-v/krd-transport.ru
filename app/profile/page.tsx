"use client"

import { useProfile } from "@/hooks/useProfile";

const ProfilePage = () => {
  const { userRole } = useProfile();
  return <>Страница профиля пользователя, {userRole}</>;
};

export default ProfilePage;
