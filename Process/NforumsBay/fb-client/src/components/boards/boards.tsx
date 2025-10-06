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
        <div className="max-w-md mx-auto bg-gray-100 min-h-screen p-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Boards</h2>
            <div className="space-y-0">
                {temporaryBoards.map((board) => (
                    <BoardItem key={board.id} board={board} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
};

export default Boards;