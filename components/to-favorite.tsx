"use client";

import { Star } from "lucide-react";
import { Button } from "./ui/button";
import { useSession } from "next-auth/react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";

import {
	addToFavorites,
	isFavoriteRoute,
	removeFromFavorites,
} from "@/data/routes";
import { useToast } from "./ui/use-toast";

interface Props {
	routeId: string;
}

export const ToFavorite = ({ routeId }: Props) => {
	const session = useSession();
	const { toast } = useToast();
	const queryClient = useQueryClient();

	// Fetching the favorite status
	const { data: isFavorite, refetch } = useQuery({
		queryKey: ["isFavoriteRoute", routeId, session.data?.user.id],
		queryFn: () => isFavoriteRoute(session.data?.user.id!, routeId),
		enabled: !!session.data?.user.id, // Only run if the user id is available
	});

	// Mutation to add to favorites
	const addMutation = useMutation({
		mutationFn: () =>
			addToFavorites(
				session.data?.user?.id!,
				session.data?.user?.email!,
				routeId
			),
		onSuccess: () => {
			toast({ title: "Маршрут был добавлен в избранное" });
			refetch(); // Refetch the favorite status
		},
	});

	// Mutation to remove from favorites
	const removeMutation = useMutation({
		mutationFn: () => removeFromFavorites(session.data?.user.id!, routeId),
		onSuccess: () => {
			toast({ title: "Маршрут был удален из избранного" });
		},
	});

	const handleAddToFavorites = () => {
		if (isFavorite) {
			removeMutation.mutate();
		} else {
			addMutation.mutate();
		}
	};

	return (
		<Button
			size='icon'
			variant='ghost'
			className='group'
			onClick={handleAddToFavorites}
			disabled={
				!session.data?.user.id ||
				addMutation.isPending ||
				removeMutation.isPending
			}
		>
			<Star
				className={`h-5 w-5 text-primary ${isFavorite ? "fill-primary" : ""} group-hover:fill-primary transition-all cursor-pointer`}
			/>
		</Button>
	);
};
