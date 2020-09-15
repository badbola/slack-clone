import React, { Component, createContext } from "react";

const initialUserState = { user: null, loading: false };
export const UserContext = createContext(initialUserState);

class userProvider extends Component {
  state = initialUserState;
  render() {
    return (
      <UserContext.Provider value={this.state}>
        {this.props.children}
      </UserContext.Provider>
    );
  }
}

export default userProvider;
