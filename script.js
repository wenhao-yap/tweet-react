class FetchTweets extends React.Component {
  render() {
    const tweet = this.props.data.map (
      details => {

        return <div key={details.id}>
          <h5>{details.created_at}</h5>
          <p>{details.text}</p>
          <ul>
            <li>Retweet Count: {details.retweet_count} </li>
            <li>Favourite Count: {details.favorite_count}</li> 
          </ul>
        </div>
      }
    );

    return (
      <div>
        <h3>Kanya West</h3>
        {tweet}
      </div>
    );
  }
}

ReactDOM.render(
  <FetchTweets data={tweets}/>,
  document.getElementById('root')
);