import React from 'react';
import merge from 'lodash/merge';

class CommentFeed extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      body: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  update(body) {
    return (e) => {
      e.preventDefault();

      this.setState({[body]: e.currentTarget.value});
    };
  }

  handleSubmit(e) {
    e.preventDefault();

    if (this.state.body) {
      const comment = merge({}, this.state, {photo_id: this.props.photoId});
      this.props.addFeedComment(comment)
        .then(() => this.setState({body: ''}));
    }
  }

  render() {

    return (
      <section className="photo-comment-form">
        <form onSubmit={this.handleSubmit}>
          <input
            id={this.props.photoId}
            className="add-comment"
            placeholder="Add a comment..."
            value={this.state.body}
            onChange={this.update('body')}>
          </input>

          <button
            className="comment-button-submit"
            type='submit'
            onClick={this.handleSubmit}>
          </button>
        </form>
      </section>
    );
  }
}

export default CommentFeed;
