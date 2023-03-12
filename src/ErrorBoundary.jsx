import { Component } from "react";

export class ErrorBoundary extends Component {
  state = {
    hasError: false,
  };

  static getDerivedStateFromError() {
    return {
      hasError: true,
    };
  }

  componentDidCatch(error, info) {
    // typically you would like to log this to something like TrackJS or NewRelic
    console.error("ErrorBoundary component caught the error", error, info);
  }

  render() {
    if (this.state.hasError) {
      return this.props.renderErrorContent();
    }

    return this.props.children;
  }
}
