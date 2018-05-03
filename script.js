class FetchTweets extends React.Component {
  render() {
    const tweet = this.props.data.map (
      details => {
        const regex = /((http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?)/g;
        const link = details.text.match(regex);
        const text = details.text.replace(regex,"");
        let image = "";
        if (details.extended_entities){
          image = details.extended_entities.media['0'].media_url_https
        }

        return <div key={details.id}>
          <h5>{details.created_at}</h5>
          <p>{text} <a href={link} target="_blank">{link}</a></p>
          <img src={image}/>
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