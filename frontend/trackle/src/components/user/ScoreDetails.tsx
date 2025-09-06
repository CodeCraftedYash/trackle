import React from "react";

type Props = {
  score: number[];
  divHeight?: number | string;
};

const ScoreDetails: React.FC<Props> = ({ score, divHeight = 300 }) => {
  const month = new Date().toLocaleString("default", { month: "long" });
  const todayIndex = new Date().getDate();
  return (
    <div className="w-full h-full">
      <h2
        className="bg-[var(--color-surface)] text-[var(--color-text-heading)] p-2 font-bold mb-4 text-center rounded-lg"
        style={{ fontSize: "var(--font-size-semi-large)" }}
      >
        {month} Score
      </h2>
      <div
        className="block lg:hidden overflow-y-auto"
        style={{ height: divHeight, scrollbarWidth: "none" }}
      >
        <ul className="flex flex-col gap-2">
          {score.map((item, index) => (
            <li
              key={index}
              className="flex justify-between items-center p-2 border-2 rounded-lg"
              style={{ fontSize: "var(--font-size-small)" }}
            >
              <span>Day {index + 1}</span>
              <span
                className="ml-4 px-2 p-0.5 rounded-sm"
                style={{
                  backgroundColor: item > 0 ? "#78cc0a" : index + 1 >= todayIndex ? "#6E6E6E":"#fc685d",
                }}
              >
                {item}
              </span>
            </li>
          ))}
        </ul>
      </div>

      
      <div className="hidden lg:grid grid-cols-7 gap-2 mt-4">
        {score.map((item, index) => (
          <div
            key={index}
            className="border rounded-lg p-2 flex flex-col items-center hover:scale-115 transition-all duration-150 ease-in-out"
            style={{ fontSize: "var(--font-size-small)" }}
          >
            <span className="font-bold">{index + 1}</span>
            <span
              className="mt-1 px-2 rounded"
               style={{
                  backgroundColor: item > 0 ? "#78cc0a" : index + 1 >= todayIndex ? "#6E6E6E":"#fc685d",
                }}
            >
              {item}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScoreDetails;
