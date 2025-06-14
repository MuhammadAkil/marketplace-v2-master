export default function MainContent({ children }: { children: React.ReactNode }) {
  return (
    <main className="w-full p-2">
      {children}
    </main>
  )
}