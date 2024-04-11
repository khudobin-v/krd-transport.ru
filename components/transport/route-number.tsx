"use client";

interface RouteNumberProps {
  number: string;
  variant: "red" | "blue" | "green";
}

export const RouteNumber = ({ number, variant }: RouteNumberProps) => {
  return (
    <>
      {variant === "red" && (
        <div className="bg-red-600 rounded-[30%] px-3 py-3 w-6 h-6 flex items-center justify-center">
          <p className="text-white font-semibold text-sm">{number}</p>
        </div>
      )}
      {variant === "blue" && (
        <div className="bg-blue-600 rounded-[30%] px-3 py-3 w-6 h-6 flex items-center justify-center">
          <p className="text-white font-semibold text-sm">{number}</p>
        </div>
      )}
      {variant === "green" && (
        <div className="bg-green-600 rounded-[30%] px-3 py-3 w-6 h-6 flex items-center justify-center">
          <p className="text-white font-semibold text-sm">{number}</p>
        </div>
      )}
    </>
  );
};
