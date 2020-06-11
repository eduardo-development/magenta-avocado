import React from 'react';
import _ from 'lodash';
import moment from 'moment-strftime';

import {Link, safePrefix} from '../utils';
import BlogPostCategories from './BlogPostCategories';

export default class BlogPostFeedItem extends React.Component {
    render() {
        let blog_feed_section = _.get(this.props, 'blog_feed_section');
        let post = _.get(this.props, 'post_page');
        return (
            <article className="cell">
                <div className="card">
                    {_.get(post, 'frontmatter.image') && (
                    <Link className="card__media card__media--top" to={safePrefix(_.get(post, 'url'))}>
                        <img src={safePrefix(_.get(post, 'frontmatter.image'))} alt={_.get(post, 'frontmatter.title')} />
                    </Link>
                    )}
                    <div className="card__body">
                        <header className="card__header">
                            <BlogPostCategories {...this.props} categories={_.get(post, 'frontmatter.categories')} container_class={'card__meta'} />
                            {_.get(blog_feed_section, 'title') ? (
                                <h3 className="h4 card__title"><Link to={safePrefix(_.get(post, 'url'))}>{_.get(post, 'frontmatter.title')}</Link></h3>
                            ) : 
                                <h2 className="h4 card__title"><Link to={safePrefix(_.get(post, 'url'))}>{_.get(post, 'frontmatter.title')}</Link></h2>
                            }
                        </header>
                        {_.get(post, 'frontmatter.excerpt') && (
                        <div className="card__copy">
                            <p>{_.get(post, 'frontmatter.excerpt')}</p>
                        </div>
                        )}
                        <footer className="card__footer">
                            <span>On <time dateTime={moment(_.get(post, 'frontmatter.date')).strftime('%Y-%m-%d %H:%M')}>{moment(_.get(post, 'frontmatter.date')).strftime('%B %d, %Y')}</time></span>
                            {_.get(post, 'frontmatter.author') && ((() => {
                                let author = _.get(post, 'frontmatter.author');
                                return (
                                    <span> by <Link to={safePrefix('/blog/author/' + author.slug)}>{author.first_name} {author.last_name}</Link></span>
                                );
                            })())}
                        </footer>
                    </div>
                </div>
            </article>
        );
    }
}
