import React from 'react'
import '../../../Blog/blog.css'
import { Link } from 'react-router-dom'
import config from '../../../../config'
const BlogItem = ({ blogs }) => {
    return (
        <>
            {
                blogs.map((blog) => (
                    <div key={blog.id} className='Grid__Cell 1/2--tablet 1/3--lap-and-up'>
                        <article className='ArticleItem custom-blog-article'>
                            <Link to={`/blog/detail/${blog.slug}/${blog.id}`} className="ArticleItem__ImageWrapper AspectRatio AspectRatio--withFallback" style={{ paddingBottom: '58%', '--aspect-ratio': '1.7' }} >
                                <img className="ArticleItem__Image Image--fadeIn lazyautosizes Image--lazyLoaded" alt="AFNAN PERFUMES CONTINUES ITS FRAGRANT JOURNEY IN OMAN WITH A STUNNING OPENING IN AVENUES MALL" sizes="574px" srcSet={`${config.development.url}/${blog.img}`} />
                            </Link>
                            <div className="ArticleItem__Content">
                                <h2 className="ArticleItem__Title Heading u-h2">
                                    <Link to={`/blog/detail/${blog.slug}/${blog.id}`}>{blog.name}</Link>
                                </h2>
                                <p className="ArticleItem__Excerpt">{blog.user.name} - {blog.formatted_created_at}  {blog && blog.text && blog.text.length > 150 ? `${blog.text.substring(0, 100)}...` : (blog && blog.text)}
                                </p>
                                <Link to={`/blog/detail/${blog.slug}/${blog.id}`} className="ArticleItem__Link Link Link--underline">Read more</Link>
                            </div>
                        </article>
                    </div>
                ))
            }

        </>
    )
}

export default BlogItem
