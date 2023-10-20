import React from "react";
import { Link } from "react-router-dom";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <h1 style={{ color: "white" }}>Oops... Something went wrong</h1>;
          <br />
          <button
            style={{ color: "gray" }}
            onClick={() => {
              window.location.href = "/";
            }}
          >
            Go back
          </button>
        </>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
