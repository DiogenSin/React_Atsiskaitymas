import ArticleCard from "../molecules/ArticleCard"
import ArticleContext from "../contexts/ArticleContexts"
import { useContext } from "react"

const Articles = () => {

    const { articleList } = useContext(ArticleContext)

    return (

        <>
        <section id="articles">


        {
            articleList ?
            <>
            {articleList.map(article =>
                <ArticleCard
                key={article.id}
                data={article}
                />
                )}
            </>
            :
            <div id="loadingGif">
                <img src="https://motiongraphicsphoebe.files.wordpress.com/2018/10/giphy.gif" alt="" />
                <h2>Kraunama</h2>
            </div>
        }
        </section>
        </>
    )
}

export default Articles