// Boards.tsx
import React from 'react';
import BoardItem from './boardItems';

const temporaryBoards = [
    { id: 1, name: 'b', title: 'Random' },
    { id: 2, name: 'g', title: 'Technology' },
    { id: 3, name: 'a', title: 'Anime & Manga' },
    { id: 4, name: 'pol', title: 'Politically Incorrect' },
];

const Boards: React.FC = () => {
    const handleDelete = (id: number) => {
        console.log(`Deleting board ${id}`); // Temporary handler
    };

    return (
        <div className="border-1 border-amber-400">
            <h2 className="text-3xl font-bold mb-6 text-slate-50">Boards</h2>
            <div className="space-y-2">
                {temporaryBoards.map((board) => (
                    <BoardItem key={board.id} board={board} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
};

export default Boards;