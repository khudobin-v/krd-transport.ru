import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Header } from "@/components/auth/header";
import { Socials } from "@/components/auth/socials";
import { BackButton } from "@/components/auth/back-button";

interface AuthFormWrapperProps {
  children: React.ReactNode;
  headerLabel: string;
  backButtonLabel: string;
  backButtonHref: string;
  showSocialButtons?: boolean;
}

export const AuthFormWrapper = ({
  children,
  headerLabel,
  backButtonLabel,
  backButtonHref,
  showSocialButtons,
}: AuthFormWrapperProps) => {
  return (
    <Card>
      <CardHeader>
        <Header label={headerLabel} />
      </CardHeader>
      <CardContent>{children}</CardContent>
      {showSocialButtons && (
        <CardFooter>
          <Socials />
        </CardFooter>
      )}
      <CardFooter>
        <BackButton label={backButtonLabel} href={backButtonHref} />
      </CardFooter>
    </Card>
  );
};
