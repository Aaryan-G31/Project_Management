export default function Button({ children, ...props }) {
  return (
    <button
      className="mt-8 px-6 py-3 rounded bg-stone-600 hover:bg-stone-500"
      {...props}
    >
      {children}
    </button>
  );
}
