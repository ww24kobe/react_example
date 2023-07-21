import { Table, message } from 'antd'
import React, { useState, useEffect, useRef } from 'react'
import { flushSync } from 'react-dom'

import {
  useAntdTable,
  useTextSelection,
  useMount,
  useBoolean,
  useUnmount,
  useUpdateEffect,
  useUpdate,
  useInViewport,
  useCreation,
} from 'ahooks'

const getTableData = ({ current, pageSize }) => {
  const query = `page=${current}&size=${pageSize}`

  return fetch(`https://randomuser.me/api?results=55&${query}`)
    .then((res) => res.json())
    .then((res) => ({
      total: res.info.results,
      list: res.results,
    }))
}

const MyComponent = () => {
  useUnmount(() => {
    message.info('unmount')
  })

  return <p>Hello World!</p>
}

class Foo {
  constructor() {
    this.data = Math.random()
  }
}

export default function App() {
  console.log('App rerender')

  const [count, setCount] = useState(0)
  const clickHandler = () => {
    // FlushSync 可以让你强制 React 同步刷新提供的回调中的任何更新。这确保了 DOM 立即更新。
    flushSync(() => {
      setCount(count + 1)
    })
    // 下面拿到的是最新的DOM的值
    console.log('flushSync=>', pRef.current.innerText)
  }
  const updateHandler = useUpdate()
  const divRef = useRef(null)
  const pRef = useRef(null)
  const { tableProps } = useAntdTable(getTableData)
  const { text } = useTextSelection()
  const [state, { toggle }] = useBoolean(true)
  const [isInViewport] = useInViewport(divRef)
  const foo = useCreation(() => new Foo(), [])
  const [, setFlag] = useState({})
  useMount(() => {
    message.success('mount')
  })

  useUpdateEffect(() => {
    message.warning('updated')
  })

  const columns = [
    {
      title: '名字',
      dataIndex: ['name', 'last'],
    },
    {
      title: '邮箱',
      dataIndex: 'email',
    },
    {
      title: '电话',
      dataIndex: 'phone',
    },
    {
      title: '性别',
      dataIndex: 'gender',
    },
  ]

  return (
    <>
      <p ref={pRef}>count: {count}</p>
      <button onClick={clickHandler}>count++</button>
      <p>{foo.data}</p>
      <button
        type="button"
        onClick={() => {
          setFlag({})
        }}
      >
        Rerender
      </button>
      <div
        ref={divRef}
        style={{ width: '100px', height: '100px', border: '1px solid skyblue' }}
      >
        我是一个盒子
      </div>
      <p>
        {Math.random()}
        <button onClick={updateHandler}>rerennder</button>
      </p>
      <p>isInViewport:{isInViewport ? 'visible' : 'hidden'}</p>
      <p>selected text:{text}</p>
      <button type="button" onClick={toggle}>
        {state ? 'unmount' : 'mount'}
      </button>
      {state && <MyComponent />}
      <Table
        style={{ width: '800px' }}
        columns={columns}
        rowKey="email"
        {...tableProps}
      />
    </>
  )
}
