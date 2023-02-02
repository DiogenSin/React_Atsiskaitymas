import { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const ArticleContext = createContext()

const ArticleProvider = ({children}) => {

    const [articleList, setArticleList] = useState(null)
    const navigate = useNavigate()

    const getArticleData = async() => {

        const fetchData = await fetch('http://localhost:3001/articles')
        .then (res => res.json())
        setArticleList(fetchData)
    }

    const handleAddArticle = (newArticle) => {

        setArticleList([...articleList, {
            title:newArticle.title,
            text:newArticle.text,
            id:newArticle.id
        }])

        fetch('http://localhost:3001/articles', {
            method: 'POST',
            headers: {
                'Content-type' : 'application/json'
            },
            body: JSON.stringify({
                id: newArticle.id,
                title: newArticle.title,
                text: newArticle.text
            })
        })

        navigate('/home')
    }

    useEffect(() => {
        getArticleData()
      }, [])


    return (

        <ArticleContext.Provider
            value={{
                articleList,
                handleAddArticle
            }}
        >
            {children}
        </ArticleContext.Provider>

    )

}


export { ArticleProvider }
export default ArticleContext
