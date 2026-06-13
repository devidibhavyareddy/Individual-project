const Timeline = ({
  updates,
}) => {
  return (
    <div className="mt-8">

      <h2 className="text-2xl font-bold mb-4">
        Rescue Timeline
      </h2>

      <div className="space-y-4">

        {updates?.length > 0 ? (
          updates.map(
            (
              update,
              index
            ) => (
              <div
                key={index}
                className="flex items-start gap-4"
              >

                <div className="w-4 h-4 bg-orange-500 rounded-full mt-2"></div>

                <div className="bg-gray-100 p-3 rounded flex-1">

                  <h3 className="font-semibold">
                    {
                      update.title
                    }
                  </h3>

                  <p className="text-gray-600">
                    {
                      update.description
                    }
                  </p>

                  <small>
                    {new Date(
                      update.createdAt
                    ).toLocaleDateString()}
                  </small>

                </div>

              </div>
            )
          )
        ) : (
          <p>
            No timeline updates available.
          </p>
        )}

      </div>

    </div>
  );
};

export default Timeline;