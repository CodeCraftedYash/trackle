import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

type PerformanceChartProps = {
  dailyScore: number[];
  date: string;
};

const PerformanceChart: React.FC<PerformanceChartProps> = ({ dailyScore, date }) => {
  const todayIndex = new Date().getDate();
  const scoreTillToday = dailyScore.slice(0,todayIndex - 1 )
  const seriesData = scoreTillToday.reduce<{ day: number; score: number }[]>(
    (accum, currentValue, currentIndex) => {
      const prevScore = accum.length > 0 ? accum[accum.length - 1].score : 0;
      accum.push({ day: currentIndex + 1, score: prevScore + currentValue });
      return accum;
    },
    []
  );

  return (
  <div className="flex flex-col items-center gap-4 relative w-full h-full">
    <h2
      className="bg-[var(--color-accent)] p-2  rounded-lg font-bold text-center w-[96%] ml-auto"
      style={{ fontSize: "var(--font-size-base)" }}
    >
      Performance Chart
    </h2>

    <div className="w-full flex-1 relative">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={seriesData}>
          <CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          <XAxis dataKey="day" />
          <YAxis />
          <Tooltip
            contentStyle={{
              backgroundColor: "black",
              color: "white",
              borderRadius: "8px",
            }}
          />
          <Line
            type="monotone"
            dataKey="score"
            stroke="lightgreen"
            strokeWidth={2}
            dot={false}
          />
        </LineChart>
      </ResponsiveContainer>
       <h2 className="text-white absolute top-2 opacity-75 left-20 font-bold border-b-2">{date}</h2>
    </div>

  </div>
);
};

export default PerformanceChart;
