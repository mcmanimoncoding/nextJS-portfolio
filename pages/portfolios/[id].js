import React from 'react';
import BaseLayout from '../../components/layouts/baseLayout';

import { withRouter } from 'next/router';
import axios from 'axios';


class Portfolio extends React.Component {

  static async getInitialProps() {
    let post = {};
    try {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${query.id}`);
      post = res.data;
    } catch (e) {
      console.error(e);
    }

    return { portfolio: post };
  };


  render() {
    const {portfolio} = this.props;
    return (
     <BaseLayout>
    <h1>I am a Portfolio Example</h1>
    <h1>Title: {portfolio.title}</h1>
    <p> <strong>Body:</strong> {portfolio.body}</p>
    <p> <strong>ID: </strong> {portfolio.id}</p>
     </BaseLayout>
    )
  }
}

export default withRouter(Portfolio);
