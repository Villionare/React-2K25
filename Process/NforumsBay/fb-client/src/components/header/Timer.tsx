// Timer.tsx
import React, { useEffect, useRef, useState } from "react";

interface TimerProps {
    hours?: number;
    minutes?: number;
    seconds?: number;
    onComplete?: () => void;
}

const Timer: React.FC<TimerProps> = ({
    hours = 0,
    minutes = 0,
    seconds = 0,
    onComplete,
}) => {
    const totalInitialSeconds = hours * 3600 + minutes * 60 + seconds;

    const [timeLeft, setTimeLeft] = useState(totalInitialSeconds);
    const intervalRef = useRef<number | null>(null);

    useEffect(() => {
        setTimeLeft(totalInitialSeconds);
    }, [totalInitialSeconds]);

    useEffect(() => {
        if (timeLeft <= 0) return;

        intervalRef.current = window.setInterval(() => {
            setTimeLeft((prev) => {
                if (prev <= 1) {
                    window.clearInterval(intervalRef.current!);
                    onComplete?.();
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);

        return () => {
            if (intervalRef.current) window.clearInterval(intervalRef.current);
        };
    }, [timeLeft, onComplete]); // ← re-run when timeLeft becomes >0 again

    const pad = (n: number) => String(n).padStart(2, "0");
    const hrs = Math.floor(timeLeft / 3600);
    const mins = Math.floor((timeLeft % 3600) / 60);
    const secs = timeLeft % 60;

    return (
        <div className="text-red">
            ({pad(hrs)}:{pad(mins)}:{pad(secs)})
        </div>
    );
};

export default Timer;