import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast';
import { Link, useNavigate, useParams } from 'react-router';
import api from '../lib/axios';
import { LoaderIcon, MoveLeft, Trash2 } from 'lucide-react';

const Update = () => {
  const [note, setNote] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const res = await api.get(`/notes/${id}`);
        setNote(res.data.data); // ✅ adjust if backend wraps inside data
      } catch (error) {
        console.log("Error in fetching data", error);
        toast.error("Error in fetching Note");
      } finally {
        setLoading(false);
      }
    };
    fetchNote();
  }, [id]);

  const handleDelete = async () => {

    if(!window.confirm("are you sure you want to delete this note?")) return;

    try {
      await api.delete(`/notes/${id}`);
      toast.success("Note deleted");
      navigate("/");
    } catch (error) {
      console.log("Delete error:", error);
      toast.error("Error deleting note");
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-base-200 flex items-center justify-center">
        <LoaderIcon className="animate-spin size-10" />
      </div>
    );
  } 

  const handelSave=async()=>{

    if(!note.title.trim() || !note.content.trim()){
      toast.error("please add title and content")
      return;
    }

    setSaving(true);

    try {
      await api.put(`/notes/${id}`,note)
      toast.success("Note updated successfully")
      navigate('/')
    } catch (error) {
      console.log("Error in updating note",error);
      toast.error("Failed to update note")
    }finally{
      setSaving(false);
    }
  }

  return (
  <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-2xl mx-auto">
        <div className="flex items-center justify-between mb-6">
          <Link to="/" className="btn btn-ghost">
            <MoveLeft />
            Back to Notes
          </Link>
          <button
            className="btn btn-outline btn-error rounded-full h-12"
            onClick={handleDelete}
          >
            <Trash2 />
            Delete Note
          </button>
        </div>
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <form className="space-y-6">
              <div className="form-control">
                <label className="label font-semibold">Title</label>
                <input
                  type="text"
                  className="input input-bordered w-full"
                  placeholder="Enter title"
                  value={note?.title || ""}
                  onChange={(e) => setNote({ ...note, title: e.target.value })}
                />
              </div>
              <div className="form-control">
                <label className="label font-semibold">Content</label>
                <textarea
                  className="textarea textarea-bordered w-full h-32"
                  placeholder="Write your note here..."
                  value={note?.content || ""}
                  onChange={(e) =>
                    setNote({ ...note, content: e.target.value })
                  }
                />
              </div>
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="btn btn-primary"
                  disabled={saving}
                  onClick={handelSave}
                >
                  {saving ? "Saving..." : "Save Changes"}
                </button>
              </div>

            </form>
          </div>
        </div>

      </div>
    </div>
  </div>
);

};

export default Update;
