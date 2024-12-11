import PageNotFound from "../../../components/PageNotFound";

export default function NotFound() {
  return (
    <PageNotFound
      message="This page could not be found."
      buttonLabel="Go home"
      buttonUrl="/"
    />
  );
}
