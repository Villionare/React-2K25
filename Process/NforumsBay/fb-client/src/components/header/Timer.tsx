import React, { useEffect, useRef, useState } from "react";

interface TimerProps {
    hours?: number;
    minutes?: number;
    seconds?: number;
    onComplete?: () => void; // optional callback when it reaches 0
}

const Timer: React.FC<TimerProps> = ({
    hours = 0,
    minutes = 0,
    seconds = 0,
    onComplete,
}) => {
    // Convert props to total seconds
    const totalInitialSeconds = hours * 3600 + minutes * 60 + seconds;

    const [timeLeft, setTimeLeft] = useState<number>(totalInitialSeconds);
    const intervalRef = useRef<number | null>(null);

    // Start countdown on mount
    useEffect(() => {
        if (timeLeft <= 0) return;

        intervalRef.current = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    clearInterval(intervalRef.current!);
                    if (onComplete) onComplete();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        // cleanup
        return () => clearInterval(intervalRef.current!);
    }, []);

    // Convert seconds -> hh:mm:ss
    const formatTime = (totalSeconds: number): string => {
        const hrs = Math.floor(totalSeconds / 3600);
        const mins = Math.floor((totalSeconds % 3600) / 60);
        const secs = totalSeconds % 60;

        const pad = (num: number) => String(num).padStart(2, "0");
        return `${pad(hrs)}:${pad(mins)}:${pad(secs)}`;
    };

    return (
        <div className=" text-white">
            {formatTime(timeLeft)}
        </div>
    );
};

export default Timer;
