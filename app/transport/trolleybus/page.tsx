import { Routes } from "@/components/transport/routes";
import TrolleybusIcon from "@/svg/transport/trolleybus";

const TrolleybusPage = () => {
	return (
		<>
			<title>Троллейбусные маршруты</title>
			<div className='flex gap-2 items-stretch'>
				<TrolleybusIcon className='h-10 w-10 fill-blue-600' />
				<h1 className='text-3xl text-blue-600 font-bold mb-2'>
					Троллебусные маршруты
				</h1>
			</div>
			<Routes type='trolleybus' />
		</>
	);
};

export default TrolleybusPage;
