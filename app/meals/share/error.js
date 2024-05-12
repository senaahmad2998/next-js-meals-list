"use client"; // why error page use "use client"? because it will catch any error in server side and client side

export default function ErrorPage({ error }) {
  console.log(error);
  return (
    <main className="error">
      <h1>Invalid Input!</h1>
      <p>{error.message}</p>
    </main>
  );
}
