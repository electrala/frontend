import React, { Component } from 'react';
import Comment from "../Comment/Comment";
import CreateComment from "../CreateComment/CreateComment";
import axios from 'axios';

export class CommentSection extends Component {
  constructor() {
    super();
    this.state = {
      comments: []
    }
  };

  // submitCommentToDB(){ take info from child and push to cloud, then refresh the state with new comments}
  submitCommentToDB = async data => {
    console.log(data);
    try {
      const new_comment = await axios.post(
        // "https://electra-la-development.herokuapp.com/comments/new",
        "http://localhost:5000/comments/new",
        data
      );
      const temp_comments = this.state.comments;
      temp_comments.push(new_comment);
      this.setState({
        comments: temp_comments
      })
    } catch (error) {
      console.log(error.message);
      alert('comment upload fail');
    }
  }

  grabCommentsFromDB = async () => {
    console.log('CommentSection mounted');
    const crit_id = this.props.critiqueInfo.id
    const { data } = await axios.get(
      `http://localhost:5000/comments/${crit_id}`
    );
    this.setState({
      comments: data
    })
  }

  componentDidMount() {
    // make axios call for all comments related to this.props.critiqueInfo.id
    // called method will set state
    this.grabCommentsFromDB();
  }

  render() {
    return (
      <div className="CommentSection" style={{ display: "grid", gridTemplateRows: "1fr 1fr 1fr 1fr 1fr" }}>
        <div className="question-asked" style={{ padding: "10px", fontSize: "2rem" }}>
          {this.props.critiqueInfo.questions}
        </div>
        {/* map over Comment component for each comment in this.state.comments array */}
        <Comment />
        <Comment />
        <Comment />
        {/* Pass in critique info and userinfo to be funneled to the back end for comment table */}
        <CreateComment submitComment={this.submitCommentToDB} userInfo={this.props.userInfo} critiqueInfo={this.props.critiqueInfo} />
      </div>
    )
  }
}

export default CommentSection
