import './Tweet.css';
import React, { Component } from 'react';
import like from '../like.svg';
import api from '../services/api';
// import { Container } from './styles';

export default class Tweet extends Component {
  handleLike = async () => {
    const { _id } = this.props.tweet;
    await api.post(`like/${_id}`);
  };

  render() {
    const { tweet } = this.props;
    return (
      <li className="tweet">
        <strong>{tweet.author}</strong>
        <p>{tweet.content}</p>
        <button type="button" onClick={this.handleLike}>
          <img src={like} alt="like" />
          {tweet.likes}
        </button>
      </li>
    );
  }
}
