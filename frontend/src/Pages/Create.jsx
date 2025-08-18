import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router'
import { MoveLeft } from 'lucide-react';
import toast from 'react-hot-toast';
import api from '../lib/axios';

const Create = () => {
  const [title, setTitle] = useState("")
  const [content, setContent] = useState("")
  const [loading, setLoading] = useState(false)

  const navigate=useNavigate();

  const handelSubmit = async(e) => {
    e.preventDefault();
    
    if(!title.trim() || !content.trim()){
       toast.error("All field required");
       return;
    }
    setLoading(true);

    try {
      await api.post('/notes',{
        title,
        content
      });
      toast.success("Note created Successfully")
      navigate('/')
    } catch (error) {
      console.log("Error in creating Note",error);
      toast.error("Error in creating note")
    }finally{
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-base-200 flex items-center justify-center px-4">
      <div className="w-full max-w-2xl">
        <Link to="/" className="btn btn-ghost mb-6">
          <MoveLeft />
          Back to Notes
        </Link>

        <div className="bg-base-100 rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold mb-6">Create new Note</h2>

          <form onSubmit={handelSubmit} className="w-full">
            <div className="form-control mb-4">
              <fieldset className="fieldset border-base-300 rounded-box  p-4 bg-base-100">
                <label className="label">Title</label>
                <input
                  type="text"
                  className="input w-full"
                  placeholder="Enter title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />

                <label className="label mt-4">Content</label>
                <textarea
                  className="textarea h-32 w-full" 
                  placeholder="Write your Note here.."
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </fieldset>
            </div>

            <div className="card-actions justify-end">
              <button
                type="submit"
                className="btn btn-active btn-primary rounded-lg"
                disabled={loading}
              >
                {loading ? "Creating.." : "Create a Note"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Create
