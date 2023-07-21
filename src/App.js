import { Table } from 'antd'
import React from 'react'
import {
  HomeOutlined,
  LoadingOutlined,
  SettingFilled,
  SmileOutlined,
  SyncOutlined,
} from '@ant-design/icons'
import { Space } from 'antd'
import { useAntdTable } from 'ahooks'

const getTableData = ({ current, pageSize }) => {
  const query = `page=${current}&size=${pageSize}`

  return fetch(`https://randomuser.me/api?results=55&${query}`)
    .then((res) => res.json())
    .then((res) => ({
      total: res.info.results,
      list: res.results,
    }))
}

export default () => {
  const { tableProps } = useAntdTable(getTableData)
  console.log('tableProps:', tableProps)

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
      <Space>
        <HomeOutlined />
        <SettingFilled />
        <SmileOutlined />
        <SyncOutlined spin />
        <SmileOutlined rotate={180} />
        <LoadingOutlined />
      </Space>
      <Table
        style={{ width: '800px' }}
        columns={columns}
        rowKey="email"
        {...tableProps}
      />
    </>
  )
}
