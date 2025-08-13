export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex flex-col h-screen md:flex-row md:overflow-hidden bg-gray-900">
      <div className="flex items-center justify-center m-4 bg-gray-800 rounded-lg px-6 py-10 md:w-64">
        <h1 className=" text-3xl text-zinc-400">Login</h1>
      </div>
      <div className="flex w-full items-center justify-center p-6 md:overflow-y-auto md:p-12">
        {children}
      </div>
    </div>
  );
}
