import { Routes } from "@/components/transport/routes";
import BusIcon from "@/svg/transport/bus";

const BusPage = () => {
	return (
		<>
			<title>Автобусные маршруты</title>
			<div className='flex gap-2 items-stretch'>
				<BusIcon className='h-10 w-10 fill-green-600' />
				<h1 className='text-3xl text-green-600 font-bold mb-2'>
					Автобусные маршруты
				</h1>
			</div>
			<Routes type='bus' />
		</>
	);
};

export default BusPage;
