import { create } from "zustand";

export interface GameQuery {
    genreId?: number;
    platformId?: number;
    sortOrder?: string;
    searchText?: string;
}

interface GameQueryStore {
    gameQuery: GameQuery;
    setGenreId: (genreId: number) => void;
    setPlatformId: (platformId: number) => void;
    setSearchText: (searchText: string) => void;
    setSortOrder: (sortOrder: string) => void;
}

const useGameQueryStore = create<GameQueryStore>((set) => ({
    gameQuery: {},
    setGenreId: (genreId) =>
        set((store) => ({
            gameQuery: { ...store.gameQuery, genreId: genreId },
        })),
    setPlatformId: (platformId) =>
        set((store) => ({
            gameQuery: { ...store.gameQuery, platformId: platformId },
        })),

    // On text search clear other filters
    setSearchText: (searchText) => set(() => ({ gameQuery: { searchText } })),
    setSortOrder: (sortOrder) =>
        set((store) => ({
            gameQuery: { ...store.gameQuery, sortOrder: sortOrder },
        })),
}));

export default useGameQueryStore;
