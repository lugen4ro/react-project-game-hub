import { useQuery } from "@tanstack/react-query";
import APIClient from "../services/api-client";
import ms from "ms";
import Game from "../entities/Game";

// Create reusable api-client
const apiClient = new APIClient<Game>("/games");

const useGame = (game_slug: string) =>
    useQuery({
        queryKey: ["games", game_slug],
        queryFn: () => apiClient.get(game_slug as string),
        staleTime: ms("24h"),
    });

export default useGame;
