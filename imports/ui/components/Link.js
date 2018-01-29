import React, { Component } from 'react';
import { Meteor } from 'meteor/meteor';
import PropTypes from 'prop-types';
import CopyToClipBoard from './CopyToClipBoard';
import { connect } from 'react-redux';
import { updateVisible } from '../actions/link';

class Link extends Component{

  constructor(props){
    super(props);
    this._handleCopy = this._handleCopy.bind(this);
  }

  state = {
    copy: false,
    btnText: 'copy'
  }

  _handleCopy(){
    this.setState({ copy: true, btnText: 'copied' });
    setTimeout(() => {
      this.setState({ copy: false, btnText: 'copy' });
    }, 1000);
  }

  renderHideButton(){
    const { _id, visible } = this.props;
    return(
      visible ?  <button onClick={() => {this.props.updateVisible( { _id, visible:false })}}>Hide</button>
              :  <button onClick={() => { this.props.updateVisible({ _id, visible: true }) }}>Unhidden</button>
    );
  }
  render(){
    const { url, _id, visible } = this.props;
    const { btnText } = this.state;
    const abs_url = Meteor.absoluteUrl(_id);
    return(
        <li>
        <p>{url}</p>
        <a target='blank' href={Meteor.absoluteUrl(_id)}>{abs_url}</a>
        {this.state.copy && <CopyToClipBoard text={abs_url} _id={_id} />}
        <button onClick={() =>this._handleCopy()}>{btnText}</button>
        {this.renderHideButton()}
        </li>
    )
  }
}

Link.propTypes = {
  url: PropTypes.string.isRequired,
  _id: PropTypes.string.isRequired
}
export default connect(null, { updateVisible })(Link);