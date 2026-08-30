import { Component, ReactNode } from "react";

type Props = { children: ReactNode };
type State = { hasError: boolean };

export class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: unknown) {
    console.error("Unhandled error:", error);
  }

  render() {
    if (!this.state.hasError) return this.props.children;

    return (
      <div style={{ padding: "80px 24px", maxWidth: 640, margin: "0 auto" }}>
        <h1 style={{ fontFamily: "Georgia, serif", fontSize: "2rem" }}>
          Something broke.
        </h1>
        <p style={{ margin: "12px 0 24px", color: "#6b6862" }}>
          Sorry about that. Try reloading the page.
        </p>
        <a href="/" style={{ color: "#2b4bf2" }}>
          ← Back home
        </a>
      </div>
    );
  }
}
