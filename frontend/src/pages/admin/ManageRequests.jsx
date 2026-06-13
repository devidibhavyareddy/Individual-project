import {
  useEffect,
  useState,
} from "react";

import toast from "react-hot-toast";

import AdminLayout from "../../layouts/AdminLayout";

import {
  getAllRequests,
  updateRequestStatus,
} from "../../services/adoptionService";

import Loader from "../../components/Loader";

const ManageRequests = () => {
  const [requests, setRequests] =
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
          await getAllRequests();

        setRequests(data);
      } catch (error) {
        toast.error(
          "Failed to load requests"
        );
      } finally {
        setLoading(false);
      }
    };

  const handleStatusUpdate =
    async (id, status) => {
      try {
        await updateRequestStatus(
          id,
          status
        );

        setRequests((prev) =>
          prev.map((request) =>
            request._id === id
              ? { ...request, status }
              : request
          )
        );

        toast.success(
          `Request ${status.toLowerCase()}`
        );
      } catch (error) {
        toast.error(
          error.response?.data
            ?.message ||
            "Failed to update request"
        );
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
    <AdminLayout>

      <h1 className="text-3xl font-bold mb-6">
        Adoption Requests
      </h1>

      {loading ? (
        <Loader />
      ) : requests.length === 0 ? (
        <div className="bg-white p-8 rounded shadow text-center text-gray-600">
          No adoption requests yet.
        </div>
      ) : (
        <div className="space-y-4">
          {requests.map((request) => (
            <div
              key={request._id}
              className="bg-white shadow p-5 rounded"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">

                <div>
                  <h2 className="text-xl font-bold">
                    {request.animal?.name || "Unknown animal"}
                  </h2>

                  <p className="text-gray-600 mt-1">
                    Applicant: {request.user?.name} ({request.user?.email})
                  </p>

                  <p className="text-gray-600">
                    Phone: {request.phone}
                  </p>

                  <p className="text-gray-600">
                    Address: {request.address}
                  </p>

                  <p className="mt-2 text-gray-700">
                    <span className="font-medium">Reason:</span> {request.reason}
                  </p>

                  <p className="mt-2 text-sm text-gray-500">
                    Match score: {request.matchScore}
                  </p>
                </div>

                <div className="flex flex-col items-start gap-2">
                  <span
                    className={`px-3 py-1 rounded text-sm font-medium ${statusColor(request.status)}`}
                  >
                    {request.status}
                  </span>

                  {request.status === "Pending" && (
                    <div className="flex gap-2 mt-2">
                      <button
                        onClick={() =>
                          handleStatusUpdate(
                            request._id,
                            "Approved"
                          )
                        }
                        className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded text-sm transition-colors"
                      >
                        Approve
                      </button>

                      <button
                        onClick={() =>
                          handleStatusUpdate(
                            request._id,
                            "Rejected"
                          )
                        }
                        className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded text-sm transition-colors"
                      >
                        Reject
                      </button>
                    </div>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>
      )}

    </AdminLayout>
  );
};

export default ManageRequests;
