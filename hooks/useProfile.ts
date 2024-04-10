import { useSession } from "next-auth/react";

export const useProfile = () => {
  const session = useSession();

  const status = session.status;

  const userId = session.data?.user?.id;
  const userName = session.data?.user?.name;
  const userEmail = session.data?.user?.email;
  const userImage = session.data?.user?.image;
  const userRole = session.data?.user?.role

  return { status, userId, userName, userEmail, userImage, userRole };
};
