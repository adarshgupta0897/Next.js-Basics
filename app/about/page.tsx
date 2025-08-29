
export default function About() {
  console.log("Is this server or client component?");

  return <div>About Page</div>;
}

// Server components are the components that are rendered on the server and their HTML has to be sent to the client.
// write "use client" at the top if you want to make a client component
// if you want to add brower events in client components then make a separate component. Example: button
// you can't use hooks in client components
