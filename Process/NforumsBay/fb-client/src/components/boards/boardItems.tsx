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
    <div className="flex items-center justify-between p-4 border-b border-slate-700 bg-slate-800 hover:bg-slate-700">
      <div className="flex items-center space-x-4">
        <div className="w-10 h-10 bg-cyan-600 rounded-full flex items-center justify-center text-slate-50 font-bold">
          {board.name}
        </div>
        <div>
          <h3 className="font-semibold text-slate-50">{board.title}</h3>
          <p className="text-sm text-slate-400">/{board.name}/</p>
        </div>
      </div>
      {
        user?.session_data?.type === "admin" ?
          <button
            onClick={() => onDelete(board.id)}
            className="text-slate-400 hover:text-red-400 transition-colors"
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