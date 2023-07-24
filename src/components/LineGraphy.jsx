import { Wcontainer, Wline } from '@alicloud/cloud-charts';

let data = [
  {
    name: '机房A',
    data: [
      [1483372800000, 1592],
      [1483459200000, 4092],
      [1483545600000, 3714],
      [1483632000000, 3984],
      [1483718400000, 6514],
      [1483804800000, 6666],
      [1483891200000, 6023],
      [1483977600000, 4018]
    ]
  },
  {
    name: '机房B',
    data: [
      [1483372800000, 3592],
      [1483459200000, 6092],
      [1483545600000, 5714],
      [1483632000000, 5984],
      [1483718400000, 8514],
      [1483804800000, 8666],
      [1483891200000, 8023],
      [1483977600000, 6018]
    ]
  }
];

let options = {
  padding: [40, 5, 24, 58],
};

export default function LineGraphy(){
    return (
      <Wcontainer className="demos">
        <Wline height="300" config={options} data={data}/>
      </Wcontainer>
    );
}

