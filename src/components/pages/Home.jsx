import Articles from "../organisms/Articles"
import ArticleContext from "../contexts/ArticleContexts"
import { useContext } from "react"

const Home = () => {

    const { noArticles } = useContext(ArticleContext)

    return (

        <>
        <h1>Articles</h1>
        {
            noArticles ?
            <h2>Sorry. There are no articles at the moment.</h2>
            :
            <Articles />
        }

        </>
    )
}

export default Home