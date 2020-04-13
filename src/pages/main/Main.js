import React, { useEffect, useState } from 'react'

import PropTypes from 'prop-types'

import _ from 'lodash'
import moment from 'moment'

import PostItem from './components/PostItem.compoent'
import BannerItem from './components/BannerItem.component'

const propTypes = {
  adds: PropTypes.array,
  posts: PropTypes.array,
  authors: PropTypes.array,
  isLoading: PropTypes.bool.isRequired,
  fetchPosts: PropTypes.func.isRequired,
  fetchAuthors: PropTypes.func.isRequired,
  getAuthorById: PropTypes.func.isRequired,
  getFilteredPosts: PropTypes.func.isRequired
}

function Main(props) {
  const [authorFilterId, setAuthorFilterId] = useState('')
  const [filteredPosts, setFilteredPosts] = useState(null)
  const [postsOrder, setPostsOrder] = useState('desc')

  useEffect(() => {
    props.fetchPosts()
    props.fetchAuthors()
  }, [])

  useEffect(() => {
    const filteredPosts = props.getFilteredPosts(authorFilterId)
    setFilteredPosts(filteredPosts)
  }, [authorFilterId, postsOrder])

  const setAuthorFilter = value => {
    setAuthorFilterId(value)
  }

  const setPostOrder = value => {
    setPostsOrder(value)
  }

  const { isLoading, posts, getAuthorById, authors, adds } = props
  const unorderedPosts = authorFilterId === '' ? posts : filteredPosts
  const postsForList = _.orderBy(unorderedPosts, 'metadata.publishedAt', postsOrder)
  return (
    <div id="main">
      <header>
        <div className="main-container">
          <img src={require('../../assets/images/logo-axur.png')} alt="Axur" />
        </div>
      </header>
      <section className="main-body">
        <div className="main-container">
          <div className="filters">
            <div className="filters-container">
              <div>
                <label>Autor: </label>
                <div className="select">
                  <select
                    className="blog-select"
                    name="authorFilter"
                    onChange={e => setAuthorFilter(e.target.value)}
                  >
                    <option key="a" value="">
                      Selecione um autor
                    </option>
                    {authors &&
                      _.map(authors, (author, i) => (
                        <option key={i} value={author.id}>
                          {author.name}
                        </option>
                      ))}
                  </select>
                </div>
              </div>
              <div>
                <label>Ordenação: </label>
                <div className="select">
                  <select onChange={e => setPostOrder(e.target.value)}>
                    <option value="desc">Mais novos</option>
                    <option value="asc">Mais antigos</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
          <div className="content">
            <div className="left-content">
              {isLoading && 'Carregando...'}

              {!isLoading &&
                postsForList &&
                _.map(postsForList, (post, i) => (
                  <PostItem key={i} post={post} getAuthorById={getAuthorById} />
                ))}
            </div>
            <div className="right-content">
              <div className="recent-posts">
                <h3>Últimos posts</h3>
                <ul>
                  {posts &&
                    _.map(_.orderBy(posts, 'metadata.publishedAt', 'desc'), post => (
                      <li>
                        {moment(post.metadata.publishedAt).format('DD/MM/YYYY')}:{' '}
                        <a href={`/post/${post.id}`} title={post.title}>
                          {post.title}
                        </a>
                      </li>
                    ))}
                </ul>
              </div>
              {adds &&
                _.map(adds, add => (
                  <BannerItem title={add.title} link={add.link} card={add.card} />
                ))}
            </div>
          </div>
        </div>
      </section>
      <footer>
        <div className="main-container">teste Axur @ 2020</div>
      </footer>
    </div>
  )
}

Main.propTypes = propTypes
export default Main
