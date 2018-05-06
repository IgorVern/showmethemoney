import React from 'react'
import PropTypes from 'prop-types'
import {Text} from 'react-native'
import {connect} from 'react-redux'

import {Operations} from './operations'
import {getOperations} from './redux/modules/operations'

export class OperationsList extends React.Component {
  static propTypes = {
    getOperations: PropTypes.func.isRequired,
    operations: PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      date: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    })).isRequired,
    error: PropTypes.string,
    loading: PropTypes.bool,
  }

  static defaultProps = {
    error: null,
    loading: true,
  }

  componentWillMount() {
    this.props.getOperations()
  }

  render() {
    const {operations, loading, error} = this.props
    if (loading) {
      return <Text>Loading</Text>
    }

    if (error) {
      return <Text>Error</Text>
    }
    return (
      <Operations data={operations} />
    )
  }
}

const mapStateToProps = (state) => ({
  operations: state.operations.data,
  loading: state.operations.loading,
  erorr: state.operations.error,
})

export const Container = connect(mapStateToProps, {
  getOperations,
})(OperationsList)
