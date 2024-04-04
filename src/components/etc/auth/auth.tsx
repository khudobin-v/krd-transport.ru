import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Link } from "lucide-react";
import { signIn } from "next-auth/react";
import { Suspense, useState } from "react";
import AuthWithVK from "./auth-with-vk";
import AuthWithYandex from "./auth-with-yandex";

const Auth = () => {
	const [email, setEmail] = useState<string>("");
	return (
		<Suspense>
			<div className="w-full">
				<div className="flex items-center justify-center py-12">
					<div className="mx-auto grid w-[350px] gap-6">
						<div className="grid gap-2 text-center">
							<h1 className="text-3xl font-bold">Авторизация</h1>
							<p className="text-balance text-muted-foreground">
								Введите адрес своей электронной почты
							</p>
						</div>
						<div className="grid gap-4">
							<div className="grid gap-2">
								<Label htmlFor="email">Электронная почта</Label>
								<Input
									className="outline-none"
									id="email"
									type="email"
									placeholder="example@krd-transport.ru"
									required
									value={email}
									onChange={e => setEmail(e.target.value)}
								/>
							</div>

							<Button
								type="submit"
								variant="primary"
								onClick={() => signIn("email", { email, callbackUrl: "/" })}
								className="w-full"
							>
								<Link className="mr-2 h-4 w-4" /> Получить ссылку для входа
							</Button>
							<p className="text-muted-foreground text-center text-sm">
								Или с использованием:
							</p>
							<div className="grid grid-cols-2 gap-2">
								<AuthWithVK />
								<AuthWithYandex />
							</div>
						</div>
					</div>
				</div>
			</div>
		</Suspense>
	);
};

export default Auth;
