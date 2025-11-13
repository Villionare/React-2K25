// Boards.tsx
import React from 'react';
import type { HomeDataMain } from '../../Types/apiBoardCategories';
import type { AxiosResponse } from 'axios';
// import BoardItem from './boardItems';

interface prop {
    boardId: string,
    response: AxiosResponse<HomeDataMain> | null,
    setSelectedThread: (slug: string) => void
}

const Boards: React.FC<prop> = ({ boardId, response, setSelectedThread }) => {

    //now boards will be fitered acc. to board category id
    // console.log("board cat id ", boardId);

    return (
        <div className="flex gap-3">
            <div className="flex gap-2 flex-wrap">
                {response?.data.boards?.filter((v) => v.board_category === boardId)
                    .map((board) => (
                        <div className='text-white' key={board._id}>
                            <h2 onClick={() => setSelectedThread(board.slug)}>
                                <span className='text-gray-500'>[{board.slug}]</span>
                                <span className='hover:text-red-600 cursor-pointer'> {board.name}</span>
                                <span className='text-yellow-400'>|</span>
                            </h2>
                        </div>
                    ))}

            </div>
        </div>
    );
};

export default Boards;