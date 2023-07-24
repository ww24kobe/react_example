import { Wcontainer, Wradar } from '@alicloud/cloud-charts';

const data = [
  {
    name: '平均水准',
    data: [
      ['2001', 41],
      ['2002', 38],
      ['2003', 33],
      ['2004', 30],
      ['2005', 25],
    ]
  },
  {
    name: '个人水准',
    data: [
      ['2001', 25],
      ['2002', 72],
      ['2003', 35],
      ['2004', 27],
      ['2005', 54],
    ]
  }
];

let options = {
  area: true
};

export default function WpieDemo2(){
    return (
      <Wcontainer className="demos">
        <Wradar
          height="300"
          config={options}
          data={data}
        />
      </Wcontainer>
    );
  }
  
