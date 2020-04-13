import React from 'react'

import moment from 'moment'

export default function PostItem(props) {
  const { post, getAuthorById } = props
  const author = getAuthorById(post.metadata.authorId)

  return (
    <div className="post-list-item">
      <div className="post-image">
        <img src={require('../../../assets/images/placeholder.png')} alt={post.title} />
      </div>
      <div className="post-content">
        <h3>{post.title}</h3>
        <p className="post-date">{moment(post.metadata.publishedAt).format('DD/MM/YYYY HH:mm')}h</p>
        <p>{post.body}</p>
        <p>
          <strong>Autor: {author ? author.name : 'Carregando autor...'}</strong>
        </p>
      </div>
    </div>
  )
}
