type Comparision = {
    current: number;
    previous: number;
};
export interface State {
    title: string;
    timeframes: {
        daily: Comparision;
        weekly: Comparision;
        monthly: Comparision;
    };
}
