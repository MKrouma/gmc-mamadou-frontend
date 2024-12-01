import React from "react";

interface State {
    hasError: boolean;
}

interface Props {
    children: React.ReactNode
}

class ErrorBoundary extends React.Component<Props, State> {
    constructor(props: Props) {
      super(props);
      this.state = { hasError: false };
    }
  
    static getDerivedStateFromError(error: Error) {
      // Mettez à jour l'état, de façon à montrer l'UI de repli au prochain rendu.
      return { hasError: true };
    }
  
    render() {
      if (this.state.hasError) {
        // Vous pouvez afficher n'importe quelle UI de repli.
        return <h1>Something went wrong.</h1>;
      }
  
      return this.props.children;
    }
  }

  export default ErrorBoundary