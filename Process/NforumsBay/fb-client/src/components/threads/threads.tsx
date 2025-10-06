// Threads.tsx
import React from 'react';
import ThreadItem from './threadItem';

const temporaryThreads = [
    { id: 1, title: 'Welcome to /b/ - Random', author: 'Anonymous', replies: 42 },
    { id: 2, title: 'What is the meaning of life?', author: 'Anon42', replies: 156 },
    { id: 3, title: 'Tech support thread', author: 'HelpMe', replies: 23 },
    { id: 4, title: 'Daily Pepe discussion', author: 'FeelsGuy', replies: 89 },
];

const Threads: React.FC = () => {
    const handleDelete = (id: number) => {
        console.log(`Deleting thread ${id}`); // Temporary handler
    };

    return (
        <div className="max-w-2xl mx-auto bg-gray-100 min-h-screen p-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Threads</h2>
            <div className="space-y-0">
                {temporaryThreads.map((thread) => (
                    <ThreadItem key={thread.id} thread={thread} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
};

export default Threads;