import { useRouteError } from "react-router-dom";

interface CustomError {
  statusText?: string;
  message?: string;
  // Add any other properties you expect on the error object
}

export default function ErrorPage() {
  const error = useRouteError() as CustomError | null;
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>{error ? error.statusText || error.message : "Unknown error"}</i>
      </p>
    </div>
  );
}
