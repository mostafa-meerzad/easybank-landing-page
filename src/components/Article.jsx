

const Article = ({title, author, content, src}) => {
    return (
        <div className='article'>
            <img src={src} alt={title} />
            <h4 className='author'>{author}</h4>
            <h3 className="title">{title}</h3>
            <p className="content">{content}</p>
        </div>
    );
}

export default Article;
