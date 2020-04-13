import { createSagaAction } from '../../shared/sagas'
import { createReducer } from '../../shared/reducers'

// Constants
export const constants = {
  BLOG_FETCH_POSTS: createSagaAction('BLOG_FETCH_POSTS'),
  BLOG_FETCH_AUTHORS: createSagaAction('BLOG_FETCH_AUTHORS')
}

// Action Creators
export const actions = {
  fetchPosts: () => ({ type: constants.BLOG_FETCH_POSTS.ACTION }),
  fetchAuthors: () => ({ type: constants.BLOG_FETCH_AUTHORS.ACTION })
}

// Reducer
const initialState = {
  posts: [],
  isLoading: false,
  error: null
}

export default createReducer(initialState, (state, action) => {
  switch (action.type) {
    default:
      return state
    case constants.BLOG_FETCH_POSTS.ACTION:
      return { ...state, error: null, isLoading: true }
    case constants.BLOG_FETCH_POSTS.SUCCESS: {
      return {
        ...state,
        posts: action.payload,
        isLoading: false,
        error: null
      }
    }
    case constants.BLOG_FETCH_POSTS.FAILED:
      return { ...state, error: `BLOG_FETCH_POSTS.FAILED: ${action.error}`, isLoading: false }

    case constants.BLOG_FETCH_AUTHORS.ACTION:
      return { ...state, error: null, isLoadingAuthors: true }
    case constants.BLOG_FETCH_AUTHORS.SUCCESS: {
      return {
        ...state,
        authors: action.payload,
        isLoadingAuthors: false,
        error: null
      }
    }
    case constants.BLOG_FETCH_AUTHORS.FAILED:
      return {
        ...state,
        error: `BLOG_FETCH_AUTHORS.FAILED: ${action.error}`,
        isLoadingAuthors: false
      }
  }
})
