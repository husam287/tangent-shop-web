export interface CounterProps {
    initValue?: number;
    onCounterChange?: (e: number) => void;
    minValue?: number;
    onReachedToMinValue?: () => void;
}
