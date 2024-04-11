"use client";

interface RouteNumberProps {
  number: string;
  color: string;
}

export const RouteNumber = ({ number, color }: RouteNumberProps) => {
  return (
    <div
      className={`bg-${color}-600 rounded-[30%] px-3 py-3 w-6 h-6 flex items-center justify-center`}
    >
      <p className="text-white font-semibold text-sm">{number}</p>
    </div>
  );
};
