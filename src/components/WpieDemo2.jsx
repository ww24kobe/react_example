import { Wcontainer, Wpie, Wnumber } from '@alicloud/cloud-charts';

let data = [
  {
    "name": "浏览器占比",
    "data": [
      ['Firefox', 45.0],
      ['IE', 26.8],
      ['Chrome', 12.8],
      ['Safari', 8.5],
      ['Opera', 6.2],
      ['Others', 0.7]
    ]
  }
];

let options = {
  cycle: true,
};


export default function WpieDemo(){
    return (
      <Wcontainer className="demos">
        <Wpie height="300" config={options} data={data}>
          <Wnumber bottomTitle="现代浏览器占比" unit="%">72.5</Wnumber>
        </Wpie>
      </Wcontainer>
    );
  }
  
