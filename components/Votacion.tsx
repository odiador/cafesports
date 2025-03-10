"use client";
import { groupSmallCategories, votingData } from '@/utils/consts';
import { useEffect, useRef } from 'react';
import { PieChart, Pie, Tooltip, ResponsiveContainer, Cell } from 'recharts';

const COLORS = ["#859ADE", "#85B6DE", "#8D85DE", "#98F5E3", "#DD85DE", "#C085DE", "#9998F5", "#E0689B"];

export default function VideoGamePieChart() {
  const data = groupSmallCategories(votingData, 2);
  const renderLabel = ({ name, percent }: { name: string, percent: number }) => `${name} ${(percent * 100).toFixed(1)}%`;

  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollLeft = containerRef.current.scrollWidth / 2 - containerRef.current.clientWidth / 2;
    }
  }, []);

  return (
    <div ref={containerRef} className="w-full overflow-x-auto overflow-visible">
      <div className="min-w-[38rem] min-h-[30rem] h-96 py-4 flex">
        <ResponsiveContainer width="100%" height="100%">
          <PieChart width={500} height={500}>
            <Pie
              data={data}
              dataKey="cantidad"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={150}
              fill="#8884d8"
              stroke="none"
              label={renderLabel}
              labelLine={false}
            >
              {data.map((_, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ backgroundColor: "white", color: "black" }}
              itemStyle={{ color: "black" }}
            />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
