import React, { Component, Suspense } from "react";
// import { Container } from 'reactstrap';
import { connect } from "react-redux";

// code splitting and lazy loading
// https://blog.logrocket.com/lazy-loading-components-in-react-16-6-6cea535c0b52

const loading = () => <div className="text-center"></div>;

class AuthLayoutAdmin extends Component {
  constructor(props) {
      super(props);
  }

  signOut(e) {
      e.preventDefault();
      this.props.history.push("/login");
  }

  render() {
      // get the child view which we would like to render
      
    const children = this.props.children || null;
    return (
      <div className="app">
        {/* header */}
        <header id="topnav">
          <Suspense fallback={loading()}>
            this is top bar
          </Suspense>
        </header>

        <div className="wrapper">
          <Suspense fallback={loading()}>{children}</Suspense>
        </div>

      </div>
    );
  }
}

const mapStateToProps = (state) => {
    return {
        
    };
};
export default connect(mapStateToProps, null)(AuthLayoutAdmin);
