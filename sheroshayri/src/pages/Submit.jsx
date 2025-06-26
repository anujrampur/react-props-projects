import { useState } from 'react';

export default function Submit() {
  const [form, setForm] = useState({ author: '', content: '' });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Shayari submitted!');
    setForm({ author: '', content: '' });
  };

  return (
    <div className="w-full max-w-xl mx-auto py-8">
      <h2 className="text-2xl font-bold text-purple-800 mb-6 text-center">Submit Your Shayari</h2>
      <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 shadow-md rounded">
        <input
          name="author"
          value={form.author}
          onChange={handleChange}
          placeholder="Author Name"
          required
          className="w-full border border-gray-300 px-4 py-2 rounded"
        />
        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          placeholder="Write your shayari here..."
          required
          className="w-full border border-gray-300 px-4 py-2 rounded h-32"
        />
        <button
          type="submit"
          className="w-full bg-purple-600 text-white py-2 rounded hover:bg-purple-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
