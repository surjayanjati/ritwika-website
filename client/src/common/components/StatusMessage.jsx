export function StatusMessage({ children }) {
  return (
    <main className="shell shell--centered">
      <p className="status-copy">{children}</p>
    </main>
  );
}
