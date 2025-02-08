import Navbar from './components/Navbar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="p-4">
        <h1 className="text-2xl font-bold">Welcome to MyApp</h1>
      </main>
    </>
  );
}
