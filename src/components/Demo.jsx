import * as echarts from 'echarts'
import React, { useRef, useState, useEffect } from 'react'

const option1 = {
  title: {
    text: 'Referer of a Website',
    subtext: 'Fake Data',
    left: 'center',
  },
  tooltip: {
    trigger: 'item',
  },
  legend: {
    orient: 'vertical',
    left: 'left',
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)',
        },
      },
    },
  ],
}

const option2 = {
  color: ['#67F9D8', '#FFE434', '#56A3F1', '#FF917C'],
  title: {
    text: 'Customized Radar Chart',
  },
  legend: {},
  radar: [
    {
      indicator: [
        { text: 'Indicator1' },
        { text: 'Indicator2' },
        { text: 'Indicator3' },
        { text: 'Indicator4' },
        { text: 'Indicator5' },
      ],
      center: ['25%', '50%'],
      radius: 120,
      startAngle: 90,
      splitNumber: 4,
      shape: 'circle',
      axisName: {
        formatter: '【{value}】',
        color: '#428BD4',
      },
      splitArea: {
        areaStyle: {
          color: ['#77EADF', '#26C3BE', '#64AFE9', '#428BD4'],
          shadowColor: 'rgba(0, 0, 0, 0.2)',
          shadowBlur: 10,
        },
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(211, 253, 250, 0.8)',
        },
      },
      splitLine: {
        lineStyle: {
          color: 'rgba(211, 253, 250, 0.8)',
        },
      },
    },
    {
      indicator: [
        { text: 'Indicator1', max: 150 },
        { text: 'Indicator2', max: 150 },
        { text: 'Indicator3', max: 150 },
        { text: 'Indicator4', max: 120 },
        { text: 'Indicator5', max: 108 },
        { text: 'Indicator6', max: 72 },
      ],
      center: ['75%', '50%'],
      radius: 120,
      axisName: {
        color: '#fff',
        backgroundColor: '#666',
        borderRadius: 3,
        padding: [3, 5],
      },
    },
  ],
  series: [
    {
      type: 'radar',
      emphasis: {
        lineStyle: {
          width: 4,
        },
      },
      data: [
        {
          value: [100, 8, 0.4, -80, 2000],
          name: 'Data A',
        },
        {
          value: [60, 5, 0.3, -100, 1500],
          name: 'Data B',
          areaStyle: {
            color: 'rgba(255, 228, 52, 0.6)',
          },
        },
      ],
    },
    {
      type: 'radar',
      radarIndex: 1,
      data: [
        {
          value: [120, 118, 130, 100, 99, 70],
          name: 'Data C',
          symbol: 'rect',
          symbolSize: 12,
          lineStyle: {
            type: 'dashed',
          },
          label: {
            show: true,
            formatter: function (params) {
              return params.value
            },
          },
        },
        {
          value: [100, 93, 50, 90, 70, 60],
          name: 'Data D',
          areaStyle: {
            color: new echarts.graphic.RadialGradient(0.1, 0.6, 1, [
              {
                color: 'rgba(255, 145, 124, 0.1)',
                offset: 0,
              },
              {
                color: 'rgba(255, 145, 124, 0.9)',
                offset: 1,
              },
            ]),
          },
        },
      ],
    },
  ],
}

const option3 = {
  title: {
    text: 'Stacked Line',
  },
  tooltip: {
    trigger: 'axis',
  },
  legend: {
    data: ['Email', 'Union Ads', 'Video Ads', 'Direct', 'Search Engine'],
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  toolbox: {
    feature: {
      saveAsImage: {},
    },
  },
  xAxis: {
    type: 'category',
    boundaryGap: false,
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
  },
  yAxis: {
    type: 'value',
  },
  series: [
    {
      name: 'Email',
      type: 'line',
      stack: 'Total',
      data: [120, 132, 101, 134, 90, 230, 210],
    },
    {
      name: 'Union Ads',
      type: 'line',
      stack: 'Total',
      data: [220, 182, 191, 234, 290, 330, 310],
    },
    {
      name: 'Video Ads',
      type: 'line',
      stack: 'Total',
      data: [150, 232, 201, 154, 190, 330, 410],
    },
    {
      name: 'Direct',
      type: 'line',
      stack: 'Total',
      data: [320, 332, 301, 334, 390, 330, 320],
    },
    {
      name: 'Search Engine',
      type: 'line',
      stack: 'Total',
      data: [820, 932, 901, 934, 1290, 1330, 1320],
    },
  ],
}

const option4 = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'cross',
      crossStyle: {
        color: '#999',
      },
    },
  },
  toolbox: {
    feature: {
      dataView: { show: true, readOnly: false },
      magicType: { show: true, type: ['line', 'bar'] },
      restore: { show: true },
      saveAsImage: { show: true },
    },
  },
  legend: {
    data: ['Evaporation', 'Precipitation', 'Temperature'],
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisPointer: {
        type: 'shadow',
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
      name: 'Precipitation',
      min: 0,
      max: 250,
      interval: 50,
      axisLabel: {
        formatter: '{value} ml',
      },
    },
    {
      type: 'value',
      name: 'Temperature',
      min: 0,
      max: 25,
      interval: 5,
      axisLabel: {
        formatter: '{value} °C',
      },
    },
  ],
  series: [
    {
      name: 'Evaporation',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' ml'
        },
      },
      data: [
        2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3,
      ],
    },
    {
      name: 'Precipitation',
      type: 'bar',
      tooltip: {
        valueFormatter: function (value) {
          return value + ' ml'
        },
      },
      data: [
        2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3,
      ],
    },
    {
      name: 'Temperature',
      type: 'line',
      yAxisIndex: 1,
      tooltip: {
        valueFormatter: function (value) {
          return value + ' °C'
        },
      },
      data: [2.0, 2.2, 3.3, 4.5, 6.3, 10.2, 20.3, 23.4, 23.0, 16.5, 12.0, 6.2],
    },
  ],
}

const option5 = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow',
    },
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true,
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick: {
        alignWithLabel: true,
      },
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      barWidth: '60%',
      data: [10, 52, 200, 334, 390, 330, 220],
    },
  ],
}

const myStyle = { height: '500px', width: '500px' }

function initGraphy(element, option) {
  console.log('initGraphy')
  // 基于准备好的dom，初始化echarts实例
  var myChart = echarts.init(element)
  // 绘制图表
  myChart.setOption(option)
}

export default function Demo() {
  const divRef = useRef(null)
  const divRef2 = useRef(null)
  const divRef3 = useRef(null)
  const divRef4 = useRef(null)
  const divRef5 = useRef(null)
  const [count, setCount] = useState(0)
  useEffect(() => {
    initGraphy(divRef.current, option1)
    initGraphy(divRef2.current, option2)
    initGraphy(divRef3.current, option3)
    initGraphy(divRef4.current, option4)
    initGraphy(divRef5.current, option5)
  }, [])
  return (
    <>
      <p>
        count:{count}
        <button
          onClick={() => {
            setCount(count + 1)
          }}
        >
          count++
        </button>
      </p>
      <div ref={divRef} style={myStyle}></div>
      <div ref={divRef2} style={myStyle}></div>
      <div ref={divRef3} style={myStyle}></div>
      <div ref={divRef4} style={myStyle}></div>
      <div ref={divRef5} style={myStyle}></div>
    </>
  )
}
