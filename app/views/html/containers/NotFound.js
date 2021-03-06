import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Component from '../components/NotFound'
import * as MetaActions from '../actions/meta'
import * as MessagesActions from '../actions/messages'
function mapStateToProps(state) {
  return {
  }
}

function mapDispatchToProps(dispatch) {
  return Object.assign({}, bindActionCreators(MetaActions, dispatch), bindActionCreators(MessagesActions, dispatch));
}

export default connect(mapStateToProps, mapDispatchToProps)(Component)
