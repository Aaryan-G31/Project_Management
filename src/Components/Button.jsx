export default function Button({ children, ...props }) {
  return (
    <button
      className="
        mt-8
        btn
        btn-primary
        rounded-xl
        shadow-md
        hover:shadow-lg
        transition-all
        duration-200
      "
      {...props}
    >
      {children}
    </button>
  );
}