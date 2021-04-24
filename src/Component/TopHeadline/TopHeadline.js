import React, { useEffect, useState} from 'react';

const TopHeadline = () => {
const [articles,setArticles]=useState([]);
useEffect(()=>{
    const url="https://newsapi.org/v2/top-headlines?country=us&apiKey=7707776e80d4468aa95a63ee116ef220"
    fetch(url)
    .then(response =>response.json())
    .then(data => setArticles(data.articles))
},[])

    return (
        <div>
            <h1>
                TopHeadline: {articles.length}
            </h1>
        </div>
    );
};

export default TopHeadline;