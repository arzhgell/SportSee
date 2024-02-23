import React, { useMemo } from 'react';
import * as d3 from 'd3';

type BarplotType = {
  width: number;
  height: number;
  data: { name: string; value1: number; value2: number }[];
};

export function Barplot({ width, height, data }: BarplotType) {
  const MARGIN = { top: 30, right: 30, bottom: 30, left: 30 };
  const BAR_PADDING = 0.3;
  console.log(data);

  const boundsWidth = width - MARGIN.right - MARGIN.left;
  const boundsHeight = height - MARGIN.top - MARGIN.bottom;

  const bandWidth = 20;

  const groups = data.map((d) => d.name);
  const yScale = useMemo(() => {
    const [, max] = d3.extent(
      data.map((d) => (d.value1 > d.value2 ? d.value1 : d.value2))
    );
    return d3
      .scaleLinear()
      .domain([max || 10, 0])
      .range([0, boundsHeight]);
  }, [data, height]);

  const xScale = useMemo(() => {
    return d3
      .scaleBand()
      .domain(groups)
      .range([0, boundsWidth])
      .padding(BAR_PADDING);
  }, [data, width]);

  const allShapes = data.map((d, i) => {
    const x = xScale(d.name);
    if (x === undefined) {
      return null;
    }
    console.log(d);
    return (
      <g key={i}>
        <rect
          x={xScale(d.name)}
          y={boundsHeight - yScale(d.value1)}
          width={bandWidth}
          height={yScale(d.value1)}
          opacity={1}
          fill="#000"
          fillOpacity={1}
          rx={10}
        />
        <rect
          x={bandWidth * 2 + (xScale(d.name) ?? 0)}
          y={boundsHeight - yScale(d.value2)}
          width={bandWidth}
          height={yScale(d.value2)}
          opacity={1}
          fill="#f00"
          fillOpacity={1}
          rx={10}
        />
        <text
          x={bandWidth * 1.5 + (xScale(d.name) ?? 0)}
          y={boundsHeight + 20}
          textAnchor="middle"
          alignmentBaseline="central"
          fontSize={24}
          stroke="#9B9EAC;"
          opacity={1}
        >
          {i + 1}
        </text>
      </g>
    );
  });

  const grid = yScale.ticks(3).map((value, i) => (
    <g key={i}>
      <line
        y1={yScale(value)}
        y2={yScale(value)}
        x1={0}
        x2={boundsWidth}
        stroke="#808080"
        opacity={0.2}
      />
      <text
        y={yScale(value)}
        x={boundsWidth + 10}
        textAnchor="middle"
        alignmentBaseline="central"
        fontSize={9}
        stroke="#808080"
        opacity={0.8}
      >
        {value}
      </text>
    </g>
  ));

  return (
    <div>
      <svg width={width} height={height}>
        <g
          width={boundsWidth}
          height={boundsHeight}
          transform={`translate(${[MARGIN.left, MARGIN.top].join(',')})`}
        >
          {grid}
          {allShapes}
        </g>
      </svg>
    </div>
  );
}
