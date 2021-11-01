import React from "react";
import Overview from "./components/Overview"

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      current: '',
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChagne = this.handleChagne.bind(this);
  }

  handleChagne(event) {
    const current = event.target.value;
    this.setState({
      current: current,
    })
  };
  handleSubmit(event) {
    const current = this.state.current;
    const posts = this.state.posts.slice();
    this.setState({
      posts: posts.concat(current),
    });
    event.preventDefault();
  }
  render() {
    return (
      <div>
        <form onSubmit={e => this.handleSubmit(e)}>
          <input type="text" onChange={this.handleChagne}></input>
          <input type="submit" value="Submit"></input>
        </form>
        <Overview posts={this.state.posts} />
      </div>
    );
  }
}

export default App;
