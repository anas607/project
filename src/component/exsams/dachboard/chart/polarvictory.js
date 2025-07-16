

import {
  VictoryChart, VictoryArea, VictoryTheme,
  VictoryAxis, VictoryScatter
} from 'victory';

const data = [
  { day: 'الأحد', value: 100 },
  { day: 'الاثنين', value: 75 },
  { day: 'الثلاثاء', value: 70 },
  { day: 'الأربعاء', value: 30 },
  { day: 'الخميس', value: 90 },
  { day: 'الجمعة', value: 40 },
];

export default function PolarVictory() {
  return (
    

      <VictoryChart
        theme={VictoryTheme.material}
        domainPadding={20}
        height={125}
      
        padding={{ top: 3, bottom: 40, left: 30, right: 10 }}
      >
        <VictoryAxis
          style={{
            tickLabels: { fontSize: 5, padding: 3 },
          }}
          tickFormat={data.map(d => d.day)}
        />
        <VictoryAxis
          dependentAxis
          tickFormat={(x) => `${x}`}
          style={{
            tickLabels: { fontSize: 5 },
          }}
        />
        <VictoryArea
          data={data}
          x="day"
          y="value"
          interpolation="natural"
          style={{
            data: { fill: "rgb(205,217,209)", stroke: "rgb(205,217,209)"},
          }}
        />
        <VictoryScatter
          data={data}
          x="day"
          y="value"
          size={1.2}
          style={{
            data: { fill: "white", stroke: "rgb(205,217,209)", strokeWidth: 1 },
          }}
        />
      
      </VictoryChart>
    
  );
}
