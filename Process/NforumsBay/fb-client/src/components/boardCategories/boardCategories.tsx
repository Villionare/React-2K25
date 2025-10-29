// Boards.tsx
import React from 'react';

//we will be declaring the interface where we are recieving the data.

const BoardCtategories: React.FC = (data) => {

    return (
        <div className="border-1 border-amber-400">
            <h2 className="text-3xl font-bold mb-6 text-slate-50">Boards</h2>
            <div className="space-y-2">
            </div>
        </div>
    );
};

export default BoardCtategories;