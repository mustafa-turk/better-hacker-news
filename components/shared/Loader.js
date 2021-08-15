export default function Loader({ isLoading, children }) {
  if (isLoading) return "Loading..."
  return <>{children}</>;
}
