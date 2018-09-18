import * as React from 'react';
import { connect } from "react-redux";

interface HeaderProps { name: string; }
function Header(props: HeaderProps) {
  return (
    <div>
      <h1>React-Redux with Typescript</h1>
      <h2>Author: {props.name}</h2>
    </div>
  )
}


interface HomeProps { title: string; }
class Home extends React.Component<HomeProps> {
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    )
  }
}

class App extends React.Component {
  constructor(props:any) {
    super(props);
    this.state = {};

  }

  public render() {
    return (
      <div className="App">
        <Header
          name="PSCD 2018"
        />
        <Home title="Home page" />
      </div>
    );
  }
}

const mapStateToProps = (state:any) => {
  return {
    ...state,
  }
}

export default connect(mapStateToProps)(App);
