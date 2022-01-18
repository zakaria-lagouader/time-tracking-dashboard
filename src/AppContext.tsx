import { createContext, useContext, useEffect, useState } from "react";
import { State } from "./types";

type timeframeType = "daily" | "weekly" | "monthly";

interface AppContextProps {
    states: State[],
    timeframe: timeframeType,
    setTimeframe: React.Dispatch<React.SetStateAction<timeframeType>>
}

const AppContext = createContext<AppContextProps>({} as AppContextProps);

const Loading = () => (
    <div className="w-full h-screen bg-very-dark-blue flex items-center justify-center">
        <p className="text-white font-bold text-4xl animate-spin">Loading...</p>
    </div>
)

export function AppProvider({ children }: { children: React.ReactNode }) {

    const [states, setStates] = useState<State[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [timeframe, setTimeframe] = useState<timeframeType>("weekly");

    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then((data) => {
                setStates(data);
                setIsLoading(false);
            })
    }, []);

    return (
        <AppContext.Provider value={{states, timeframe, setTimeframe}}>
            {isLoading ? <Loading /> : children}
        </AppContext.Provider>
    )
}

export function useGetState(title: string) {
    const { states } = useContext(AppContext);
    return states.find(state => state.title === title);
}

export function useGetTimeframe() {
    const { timeframe } = useContext(AppContext);
    return timeframe;
}

export function useSetTimeframe() {
    const { setTimeframe } = useContext(AppContext);
    return (timeframe: timeframeType) => setTimeframe(timeframe);
}