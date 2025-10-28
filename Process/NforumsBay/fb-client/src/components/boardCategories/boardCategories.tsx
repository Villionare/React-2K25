// Boards.tsx
import React from 'react';

const BoardCtategories: React.FC = (data) => {

    return (
        <div className="border-1 border-amber-400">
            <h2 className="text-3xl font-bold mb-6 text-slate-50">Boards</h2>
            <div className="space-y-2">
                {data.map((v) => (
                    <div></div>
                ))}
            </div>
        </div>
    );
};

export default BoardCtategories;