// BoardItem.tsx
import React from 'react';
import useSessionContext from '../../context/useContext';

interface BoardItemProps {
  board: {
    id: number;
    name: string;
    title: string;
  };
  onDelete: (id: number) => void;
}

const BoardItem: React.FC<BoardItemProps> = ({ board, onDelete }) => {
  const { user } = useSessionContext();

  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white hover:bg-gray-50">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
          {board.name}
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">{board.title}</h3>
          <p className="text-sm text-gray-500">/{board.name}/</p>
        </div>
      </div>
      {
        user?.session_data?.type === "admin" ?
          <button
            onClick={() => onDelete(board.id)}
            className="text-gray-400 hover:text-red-500 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button> : null
      }

    </div>
  );
};

export default BoardItem;