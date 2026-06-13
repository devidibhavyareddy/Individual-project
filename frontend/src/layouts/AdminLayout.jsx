import { Link } from "react-router-dom";

const AdminLayout = ({ children }) => {
  return (
    <div className="min-h-screen flex">

      <aside className="w-64 bg-gray-900 text-white p-5 flex flex-col">

        <h2 className="text-2xl font-bold mb-8">
          Admin Panel
        </h2>

        <div className="flex flex-col gap-4 flex-1">

          <Link
            to="/admin/dashboard"
            className="hover:text-orange-400 transition-colors"
          >
            Dashboard
          </Link>

          <Link
            to="/admin/animals"
            className="hover:text-orange-400 transition-colors"
          >
            Manage Animals
          </Link>

          <Link
            to="/admin/add-animal"
            className="hover:text-orange-400 transition-colors"
          >
            Add Animal
          </Link>

          <Link
            to="/admin/requests"
            className="hover:text-orange-400 transition-colors"
          >
            Adoption Requests
          </Link>

        </div>

        <Link
          to="/"
          className="mt-8 text-sm text-gray-400 hover:text-white transition-colors"
        >
          ← Back to website
        </Link>

      </aside>

      <main className="flex-1 p-6 bg-gray-100">
        {children}
      </main>

    </div>
  );
};

export default AdminLayout;
