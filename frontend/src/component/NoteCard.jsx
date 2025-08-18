import { Link } from 'react-router'
import { FilePenLine, Trash2 } from 'lucide-react';
import React from 'react'
import api from '../lib/axios';
import { formatDate } from '../lib/utils';
import toast from 'react-hot-toast';

const NoteCard = ({ note, setNotes }) => {
  const handleDelete = async (e, id) => {
    e.preventDefault();

    if (!window.confirm("Are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      setNotes((prev) => prev.filter((n) => n._id !== id));
      toast.success("Successfully deleted note");
    } catch (error) {
      console.log("Error in deleting note", error);
      toast.error("Failed to delete note");
    }
  };

  return (
    <div className="card bg-base-100 border border-base-500 shadow-sm w-full max-w-sm hover:shadow-md transition rounded-lg">
      <div className="card-body space-y-3">
        <Link to={`/update/${note._id}`} className="hover:underline">
          <h2 className="text-xl font-semibold text-base-content">
            {note.title}
          </h2>
        </Link>

        <p className="text-sm text-base-content/60 leading-relaxed line-clamp-3 text-gray-400">
          {note.content}
        </p>

        <div className="card-actions justify-between items-center pt-3 border-t border-base-200">
          <span className="text-xs text-base-content/50 text-gray-400">
            {formatDate(new Date(note.createdAt))}
          </span>

          <div className="flex items-center">
            <Link to={`/update/${note._id}`} className="btn btn-ghost btn-sm">
              <FilePenLine className="size-5" />
            </Link>

            <button
              onClick={(e) => handleDelete(e, note._id)}
              className="btn btn-ghost btn-sm text-error"
            >
              <Trash2 className="size-5" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NoteCard;
