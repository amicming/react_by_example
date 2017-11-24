import React from 'react';

class OnChangeEventComponent extends React.Component {
  constructor() {
    super();
    this.state = {
      personName: 'Vasistha'
    }
  };
  changePersonName = e => {
    this.setState({
      personName: e.target.value
    })
  };
  render () {
    return (
      <div>
        <form>
          <input onChange={this.changePersonName} value={this.state.personName} />
        </form>
        <p>Hello {this.state.personName}!</p>
      </div>
    );
  }
}

export default OnChangeEventComponent;
