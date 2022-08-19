

const Article = ({title, author, content, src}) => {
    return (
        <section className='article'>
            <img className="article-img" src={src} alt={title} />
            <h4 className='author'>{author}</h4>
            <h3 className="title">{title}</h3>
            <p className="content text-content">{content}</p>
        </section>
    );
}

export default Article;
