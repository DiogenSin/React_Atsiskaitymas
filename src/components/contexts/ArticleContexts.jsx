import { createContext, useState, useEffect } from "react";

const ArticleContext = createContext()

const ArticleProvider = ({children}) => {

    const [articleList, setArticleList] = useState(null)

    const getArticleData = async() => {

        const fetchData = await fetch('http://localhost:3001/articles')
        .then (res => res.json())
        setArticleList(fetchData)
    }

    useEffect(() => {
        getArticleData()
      }, [])


    return (

        <ArticleContext.Provider
            value={{
                articleList
            }}
        >
            {children}
        </ArticleContext.Provider>

    )

}


export { ArticleProvider }
export default ArticleContext
