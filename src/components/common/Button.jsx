const Button = ({
  children,
  variant = 'primary',
  className = '',
  type = 'button',
  ...props
}) => {
  const base =
    'inline-flex items-center justify-center gap-2 rounded-full px-6 py-3.5 text-sm font-semibold tracking-tight transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50';

  const styles = {
    primary:
      'bg-gradient-to-r from-sky-600 to-blue-500 text-white shadow-soft hover:-translate-y-0.5 hover:shadow-card',
    secondary:
      'bg-slate-900 text-white shadow-soft hover:-translate-y-0.5 hover:bg-slate-800',
    outline:
      'border border-sky-100 bg-white text-slate-700 shadow-sm hover:-translate-y-0.5 hover:border-sky-200 hover:bg-sky-50',
    ghost:
      'bg-transparent text-slate-700 hover:bg-sky-50',
    danger:
      'bg-rose-500 text-white shadow-soft hover:-translate-y-0.5 hover:bg-rose-600',
  };

  return (
    <button type={type} className={`${base} ${styles[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;
