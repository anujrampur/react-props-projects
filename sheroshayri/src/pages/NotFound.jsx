import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="text-center p-8">
      <h2 className="text-2xl font-bold text-purple-700">404 - Not Found</h2>
      <Link to="/" className="text-purple-500 underline mt-4 inline-block">Back to Home</Link>
    </div>
  );
}
