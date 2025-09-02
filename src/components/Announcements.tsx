"use client";

const Announcements = () => {
  return (
    <div className="bg-white p-4 rounded-2xl">
      {/* Title */}
      <div className="flex justify-between items-center my-4">
        <h1 className="text-xl font-semibold">Announcements</h1>
        <span className="text-xs text-gray-400 cursor-pointer">View all</span>
      </div>
      {/* Announcements */}
      <div className="flex flex-col gap-4 mt-4">
        <div className="bg-lightSky rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-md">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            inventore dignissimos, architecto necessitatibus
          </p>
        </div>

        <div className="bg-purpleLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-md">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            inventore dignissimos, architecto necessitatibus
          </p>
        </div>

        <div className="bg-yellowLight rounded-md p-4">
          <div className="flex items-center justify-between">
            <h2 className="font-medium text-md">Lorem ipsum dolor sit</h2>
            <span className="text-xs text-gray-400 bg-white rounded-md px-1 py-1">
              2025-01-01
            </span>
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus
            inventore dignissimos, architecto necessitatibus
          </p>
        </div>
      </div>
    </div>
  );
};

export default Announcements;
