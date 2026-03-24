'use client';

import { useMemo } from 'react';

interface HeatmapProps {
  data: Record<string, number>;
}

export default function BootdevHeatmap({ data }: HeatmapProps) {
  const { weeks, months } = useMemo(() => {
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(startDate.getDate() - 364); // ~52 weeks

    // Align to Sunday
    const dayOfWeek = startDate.getDay();
    startDate.setDate(startDate.getDate() - dayOfWeek);

    const weeks: { date: Date; count: number }[][] = [];
    let currentWeek: { date: Date; count: number }[] = [];
    const monthLabels: { label: string; weekIndex: number }[] = [];

    let currentMonth = -1;
    const d = new Date(startDate);

    while (d <= today) {
      const dateStr = d.toISOString().split('T')[0];
      const count = data[dateStr] || 0;
      const dayOfMonth = d.getMonth();

      if (dayOfMonth !== currentMonth) {
        currentMonth = dayOfMonth;
        monthLabels.push({
          label: d.toLocaleDateString('en-US', { month: 'short' }),
          weekIndex: weeks.length,
        });
      }

      currentWeek.push({ date: new Date(d), count });

      if (currentWeek.length === 7) {
        weeks.push(currentWeek);
        currentWeek = [];
      }

      d.setDate(d.getDate() + 1);
    }

    if (currentWeek.length > 0) {
      weeks.push(currentWeek);
    }

    return { weeks, months: monthLabels };
  }, [data]);

  const maxCount = Math.max(...Object.values(data), 1);

  const getColor = (count: number) => {
    if (count === 0) return 'bg-neutral-900';
    const intensity = count / maxCount;
    if (intensity < 0.25) return 'bg-blue-900';
    if (intensity < 0.5) return 'bg-blue-700';
    if (intensity < 0.75) return 'bg-blue-500';
    return 'bg-blue-400';
  };

  return (
    <div className="overflow-x-auto">
      <div className="inline-block min-w-full">
        {/* Month labels */}
        <div className="flex text-xs text-neutral-500 mb-1 pl-8">
          {months.map((m, i) => (
            <div
              key={i}
              className="text-left"
              style={{
                marginLeft: i === 0 ? 0 : `${(m.weekIndex - (months[i - 1]?.weekIndex || 0) - 1) * 14}px`,
              }}
            >
              {m.label}
            </div>
          ))}
        </div>

        <div className="flex gap-0.5">
          {/* Day labels */}
          <div className="flex flex-col gap-0.5 text-xs text-neutral-500 pr-2 pt-0.5">
            <div className="h-3">Mon</div>
            <div className="h-3"></div>
            <div className="h-3">Wed</div>
            <div className="h-3"></div>
            <div className="h-3">Fri</div>
            <div className="h-3"></div>
            <div className="h-3"></div>
          </div>

          {/* Weeks */}
          {weeks.map((week, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-0.5">
              {week.map((day, dayIndex) => {
                const dateStr = day.date.toISOString().split('T')[0];
                return (
                  <div
                    key={dayIndex}
                    className={`w-3 h-3 rounded-sm ${getColor(day.count)} transition-colors`}
                    title={`${dateStr}: ${day.count} lesson${day.count !== 1 ? 's' : ''}`}
                  />
                );
              })}
            </div>
          ))}
        </div>

        {/* Legend */}
        <div className="flex items-center gap-2 mt-3 text-xs text-neutral-500">
          <span>Less</span>
          <div className="w-3 h-3 rounded-sm bg-neutral-900" />
          <div className="w-3 h-3 rounded-sm bg-blue-900" />
          <div className="w-3 h-3 rounded-sm bg-blue-700" />
          <div className="w-3 h-3 rounded-sm bg-blue-500" />
          <div className="w-3 h-3 rounded-sm bg-blue-400" />
          <span>More</span>
        </div>
      </div>
    </div>
  );
}
