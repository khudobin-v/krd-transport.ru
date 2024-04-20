import { Routes } from "@/components/transport/routes";
import TramIcon from "@/svg/transport/tram";

const TramPage = () => {
	return (
		<>
			<title>Трамвайные маршруты</title>
			<div className='flex gap-2 items-stretch'>
				<TramIcon className='h-10 w-10 fill-red-600' />
				<h1 className='text-3xl text-red-600 font-bold mb-2'>
					Трамвайные маршруты
				</h1>
			</div>
			<Routes type='tram' />
		</>
	);
};

export default TramPage;
