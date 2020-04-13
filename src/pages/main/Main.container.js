import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

/**
 * This is a container component. It does not contain any JSX,
 * nor does it import React. This component is **only** responsible for
 * wiring in the actions and state necessary to render a presentational
 * component.
 */

import Main from './Main'

import { actions as blogActions } from '../../redux/modules/blog'

import * as blogSelectors from '../../redux/selectors/blog'

const mapStateToProps = (state, props) => ({
  posts: blogSelectors.getPosts(state, props),
  isLoading: blogSelectors.isLoading(state, props),
  getAuthorById: blogSelectors.getAuthorById(state, props),
  authors: blogSelectors.getAuthors(state, props),
  getFilteredPosts: blogSelectors.getFilteredPosts(state, props),
  adds: blogSelectors.getAdds(state, props)
})

const mapDispatchToProps = (dispatch, props) => ({
  fetchPosts: () => dispatch(blogActions.fetchPosts()),
  fetchAuthors: () => dispatch(blogActions.fetchAuthors())
})

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Main)
)
