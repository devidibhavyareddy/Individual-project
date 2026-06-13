import {
  useEffect,
  useState,
} from "react";

import { Link } from "react-router-dom";

import toast from "react-hot-toast";

import MainLayout from "../layouts/MainLayout";

import {
  getMyRequests,
} from "../services/adoptionService";

import Loader from "../components/Loader";

const MyRequests = () => {
  const [requests,
    setRequests] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    fetchRequests();
  }, []);

  const fetchRequests =
    async () => {
      try {
        const data =
          await getMyRequests();

        setRequests(data);
      } catch (error) {
        toast.error(
          "Failed to load requests"
        );
      } finally {
        setLoading(false);
      }
    };

  const statusColor = (status) => {
    switch (status) {
      case "Approved":
        return "bg-green-100 text-green-700";
      case "Rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-yellow-100 text-yellow-700";
    }
  };

  return (
    <MainLayout>

      <div className="max-w-6xl mx-auto p-5">

        <h1 className="text-4xl font-bold mb-6">
          My Adoption Requests
        </h1>

        {loading ? (
          <Loader />
        ) : requests.length === 0 ? (
          <div className="text-center py-16 bg-white rounded-xl shadow">
            <p className="text-gray-600 text-lg mb-4">
              You haven't submitted any adoption requests yet.
            </p>
            <Link
              to="/animals"
              className="text-orange-500 hover:underline font-semibold"
            >
              Browse animals →
            </Link>
          </div>
        ) : (
          <div className="space-y-4">
            {requests.map(
              (request) => (
                <div
                  key={
                    request._id
                  }
                  className="bg-white shadow p-5 rounded"
                >

                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-3">

                    <div>
                      <h2 className="font-bold text-lg">
                        {request.animal?.name || "Unknown animal"}
                      </h2>

                      <p className="text-gray-600">
                        {request.animal?.type} · {request.animal?.age} years old
                      </p>

                      <p className="text-gray-600 mt-1">
                        Reason: {request.reason}
                      </p>

                      <p className="text-sm text-gray-400 mt-1">
                        Submitted: {new Date(request.createdAt).toLocaleDateString()}
                      </p>
                    </div>

                    <span
                      className={`px-3 py-1 rounded text-sm font-medium self-start ${statusColor(request.status)}`}
                    >
                      {request.status}
                    </span>

                  </div>

                </div>
              )
            )}
          </div>
        )}

      </div>

    </MainLayout>
  );
};

export default MyRequests;
