

const Article = ({title, author, content, src}) => {
    return (
        <section className='article'>
            <img className="article-img" src={src} alt={title} />
            <h3 className='author'>{author}</h3>
            <h3 className="title">{title}</h3>
            <p className="content text-content">{content}</p>
        </section>
    );
}

export default Article;
