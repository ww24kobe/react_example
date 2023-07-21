import { useState } from 'react'
import {Link,Outlet} from "react-router-dom"
import {produce} from 'immer'
export default function List() {
  const [news, setNews] = useState([
    {
      id: 1,
      title: 'NBA',
      content: 'NBA太精彩了',
    },
    {
      id: 2,
      title: 'CBA',
      content: 'CBA太精彩了',
    },
    {
      id: 3,
      title: '村BA',
      content: '村BA太精彩了',
    },
  ])

  const addNews = () => {
    setNews(
      produce(draft => {
        draft.push({id:Date.now(),title:Math.random(),content:Math.random()})
      })
    )
    // setNews([...news,{id:Date.now(),title:Math.random(),content:Math.random()}])
  }

  const delHandler = (index) => {
    setNews(
      produce(draft => {
        draft.splice(index,1)
      })
    )
  }
  return (
    <>
      <h3>新闻列表</h3>
      <button onClick={addNews}>添加新闻</button>
      <ul>
        {news.map((item,index) => {
          return (
            <li key={item.id}>
              <Link to={`detail/${item.id}/${item.title}/${item.content}?name=peiqi&age=3`}>
              {item.title}
              </Link>
              <button onClick={()=>{ delHandler(index) }}>删除</button>
            </li>
          )
        })}
      </ul>
      <div>
        <Outlet />
      </div>
    </>
  )
}
