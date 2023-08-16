import Nav from "./nav";

export default function Page({ children }) {
  return (
    <>
      <Nav />
      <main>{children}</main>
    </>
  );
}
