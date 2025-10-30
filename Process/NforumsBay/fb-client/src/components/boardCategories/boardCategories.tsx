// Boards.tsx
import type { AxiosResponse } from 'axios';
import React, { useEffect } from 'react';
import Boards from '../boards/boards';
import type { HomeDataMain } from '../../Types/apiBoardCategories';

interface props {
    response: AxiosResponse<HomeDataMain> | null
}

//we will be declaring the interface where we are recieving the data.

const BoardCategories: React.FC<props> = ({ response }) => {

    useEffect(() => {
        console.log(response?.data.boardCategories);
    }, [response]);

    return (
        <div className="flex flex-col text-slate-50 my-10">

            <h2 className="text-3xl font-bold mb-2">Board Categories:</h2>

            <div className="flex flex-col gap-5">

                {response?.data.boardCategories.map((v) => (
                    <div className='flex'>
                        <div>
                            <p key={v._id} className='text-amber-300 w-40'>{v.name}</p>
                            <h2 className="text-red-600">(Boards):</h2>
                        </div>
                        <Boards boardId={v._id} response={response} />

                    </div>
                ))}
            </div>
        </div>
    );
};

export default BoardCategories;