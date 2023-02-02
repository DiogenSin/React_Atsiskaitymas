const ArticleCard = ({data}) => {


    return (
        <>
        <div className="articleCard">
            <h3>{data.title}</h3>
            <p>{data.text}</p>
        </div>
        </>
    )
}

export default ArticleCard