import { Wcontainer, Wpie } from '@alicloud/cloud-charts';

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


export default function WpieDemo(){
  return (
    <Wcontainer className="demos">
      <Wpie height="300" data={data} />
    </Wcontainer>
  );
}
