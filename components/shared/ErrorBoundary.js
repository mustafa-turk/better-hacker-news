function ErrorBoundary({ isError, children }) {
  console.log('rendering...');
  if (isError) {
    return <div>Something went horribly wrong...</div>;
  }
  return children;
}

export default ErrorBoundary;
