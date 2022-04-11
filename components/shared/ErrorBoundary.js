function ErrorBoundary({ isError, children }) {
  if (isError) {
    return <div>Something went horribly wrong...</div>;
  }
  return children;
}

export default ErrorBoundary;
