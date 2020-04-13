import _ from 'lodash'
import Fuse from 'fuse.js'
import { createSelector } from 'reselect'

export const getPosts = state => _.get(state, 'blog.posts', [])

export const isLoading = state => _.get(state, 'blog.isLoading', false)

export const getAuthors = state => _.get(state, 'blog.authors', [])
export const isLoadingAuthors = state => _.get(state, 'blog.isLoadingAuthors', false)

export const getAuthorById = (state, props) => authorId =>
  createSelector(
    [getAuthors],
    authors => {
      return _.find(authors, { id: authorId }) || 'pica'
    }
  )(state)

export const getFilteredPosts = (state, props) => filter =>
  createSelector(
    [getPosts],
    posts => {
      var options = {
        shouldSort: false,
        tokenize: true,
        threshold: 0.0,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: ['metadata.authorId']
      }
      var fuse = new Fuse(posts, options)
      const filtered = fuse.search(filter)
      return _.map(filtered, i => i.item)
    }
  )(state)

export const getAdds = () => [
  {
    title: 'Digital Fraud Discovery',
    link: 'https://axur.com/pt/digital-fraud.html',
    card: 'digital-fraud.png'
  },
  {
    title: 'Sales Abuse Discovery',
    link: 'https://axur.com/pt/sales-abuse.html',
    card: 'sales-abuse.png'
  },
  {
    title: 'Data Leakage Discovery',
    link: 'https://axur.com/pt/data-leak.html',
    card: 'data-leak.png'
  }
]
