"use client";

interface RouteNumberProps {
  number: string;
  type: "tram" | "trolleybus" | "bus";
}

export const RouteNumber = ({ number, type }: RouteNumberProps) => {
  return (
    <>
      {type === "tram" && (
        <div className="bg-red-600 rounded-[30%] px-3 py-3 w-6 h-6 flex items-center justify-center">
          <p className="text-white font-semibold text-sm">{number}</p>
        </div>
      )}
      {type === "trolleybus" && (
        <div className="bg-blue-600 rounded-[30%] px-3 py-3 w-6 h-6 flex items-center justify-center">
          <p className="text-white font-semibold text-sm">{number}</p>
        </div>
      )}
      {type === "bus" && (
        <div className="bg-green-600 rounded-[30%] px-3 py-3 w-6 h-6 flex items-center justify-center">
          <p className="text-white font-semibold text-sm">{number}</p>
        </div>
      )}
    </>
  );
};
