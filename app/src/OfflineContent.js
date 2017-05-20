import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';

export default class OfflineContent extends PureComponent {

  static propTypes = {
    fromUrl: PropTypes.string.isRequired
  }

  state = {
    isLoading: false,
    content: null
  }

  componentDidMount() {
    fetch(this.props.fromUrl)
      .then(r => r.text())
      .then(content => this.setState(() => ({
         content, 
         isLoading: false 
      })));
  }

  render() {
    if (this.state.isLoading) {
      return <div>Loading...</div>;
    }

    return (
      <div className="offline-content">
        <pre>{this.state.content}</pre>
      </div>
    );
  }
}
