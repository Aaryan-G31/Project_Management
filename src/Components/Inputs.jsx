export default function Input({ label, textarea, ...props }) {
  const classes =
    "w-full px-3 py-2 rounded-lg border border-base-300 bg-base-100 text-base-content focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition";

  return (
    <p className="space-y-2">
      <label className="text-sm font-semibold uppercase tracking-wide text-base-content">
        {label}
      </label>

      {textarea ? (
        <textarea
          className={`${classes} min-h-32 resize-none`}
          {...props}
        />
      ) : (
        <input className={classes} {...props} />
      )}
    </p>
  );
}