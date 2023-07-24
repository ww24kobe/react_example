import { Wcontainer, Wlinebar } from '@alicloud/cloud-charts';

const data = [
  {
    name: '机房1',
    type: 'line',
    yAxis: 0,
    data: [
      [1483372800000, 1892],
      [1483459200000, 7292],
      [1483545600000, 5714],
      [1483632000000, 5354],
      [1483718400000, 2014],
      [1483804800000, 22],
      [1483891200000, 11023],
      [1483977600000, 5218],
      [1484064000000, 8759],
      [1484150400000, 9981],
      [1484236800000, 4533],
      [1484323200000, 11398],
      [1484409600000, 1064],
      [1484496000000, 6494],
    ],
  },
  {
    name: '机房2',
    type: 'bar',
    yAxis: 1,
    data: [
      [1483372800000, 11751],
      [1483459200000, 4078],
      [1483545600000, 2175],
      [1483632000000, 12048],
      [1483718400000, 1748],
      [1483804800000, 10494],
      [1483891200000, 9597],
      [1483977600000, 4788],
      [1484064000000, 2085],
      [1484150400000, 492],
      [1484236800000, 2965],
      [1484323200000, 4246],
      [1484409600000, 2160],
      [1484496000000, 11877],
    ],
  },
];

const options = {
  padding: [40, 52, 24, 44],
  xAxis: {
    type: 'timeCat',
  },
  yAxis: [{}, {}],
};

const evtOpt = {
  click: obj => {
    if (obj.data && obj.data._origin) {
      const { type, x, y1 } = obj.data._origin;
      console.log(`${type} ${new Date(x).toLocaleDateString()}: ${y1}`);
    }
  },
};

export default function LineGraphy2(){
  return (
    <Wcontainer className="demos">
        <Wlinebar height="300" config={options} event={evtOpt} data={data} />
      </Wcontainer>
  );
}


