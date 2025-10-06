// Posts.tsx
import React from 'react';
import PostItem from './postItem';

const temporaryPosts = [
    { id: 1, author: 'Anonymous', content: 'This is the original post. Hello world!', timestamp: '2025-10-06 10:00' },
    { id: 2, author: 'AnonReply', content: '>>1 Sounds good. What\'s next?', timestamp: '2025-10-06 10:05' },
    { id: 3, author: 'AnotherAnon', content: 'I disagree. Here\'s why...', timestamp: '2025-10-06 10:10' },
    { id: 4, author: 'Lurker', content: 'Bump for visibility.', timestamp: '2025-10-06 10:15' },
];

const Posts: React.FC = () => {
    const handleDelete = (id: number) => {
        console.log(`Deleting post ${id}`); // Temporary handler
    };

    return (
        <div className="max-w-2xl mx-auto bg-gray-100 min-h-screen p-4">
            <h2 className="text-2xl font-bold mb-4 text-gray-800">Posts</h2>
            <div className="space-y-0">
                {temporaryPosts.map((post) => (
                    <PostItem key={post.id} post={post} onDelete={handleDelete} />
                ))}
            </div>
        </div>
    );
};

export default Posts;