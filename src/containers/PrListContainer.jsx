import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';
import PR from '../components/PR';
import * as fetchAction from '../actions/prListAction';    

class PrListContainer extends Component {
  render() {
    const props = {
      prs: this.props.prs,
    };
    return <PR {...props} />;
  }
}

PrListContainer.propTypes = {
  prs: PropTypes.array,
};

const mapStateToProps = (state) => {
  const { prs } = state;

  return {
    prs: prs.prsData ,
  };
};

const actions = {
  fetchAction,
};

export default connect(mapStateToProps, actions)(PrListContainer);