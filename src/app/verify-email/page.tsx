import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

const VerifyEmail = () => {
	return (
		<div
			className="flex items-center justify-center"
			style={{ minHeight: "90vh" }}
		>
			<Card>
				<CardHeader>
					<CardTitle>Перейдите по ссылке в письме</CardTitle>
				</CardHeader>
				<CardContent>
					<p>
						Для того, чтобы продолжить вход в аккаунт, используя адрес своей
						электронной почты, необходимо перейти по ссылке в письме
					</p>
				</CardContent>
				<CardFooter>
					<p>Не пришло письмо? Проверьте папку "Спам"</p>
				</CardFooter>
			</Card>
		</div>
	);
};
export default VerifyEmail;
