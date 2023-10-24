// export default async function Home() {

//   const res = await fetch("http://localhost:3030/api/articles");

//   const articles = await res.json();

//   return (
//     <div className="container">
//       <div className="title__page">
//         <h2>homepage</h2>
//       </div>
//       <div className="grid">
//         {
//           articles?.data?.map(article => (
//             <div className="item">
//               <h2>{article.titre}</h2>
//               <p>{article.description}</p>
//               <p>Date : {article.date}</p>
//             </div>
//           ))
//         }
//       </div>
//     </div>
//   )
// }
"use client"
import { useState, useEffect } from "react";

export default function Home() {

  const [articles, setArticles] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3030/api/articles")
      .then(res => res.json())
      .then(data => setArticles(data.data))
      .catch(err => console.error(err))
  }, [])

  return (
    <div classNameName="container">
      <div classNameName="title__page">
        <h2>homepage</h2>
      </div>
      <div classNameName="grid">
        {
          articles?.map(article => (
            <div classNameName="item">
              <h2>{article.titre}</h2>
              <p>{article.description}</p>
              <p>Date : {article.date}</p>
            </div>
          ))
        }
      </div>
    </div>
  )
}