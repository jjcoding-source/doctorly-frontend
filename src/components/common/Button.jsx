const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const base = 'px-6 py-3 rounded-xl font-medium transition-all active:scale-95';
  const variants = {
    primary: 'bg-primary text-white hover:bg-sky-600',
    outline: 'border border-gray-300 hover:bg-gray-50',
    danger: 'bg-red-500 text-white hover:bg-red-600',
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
};

export default Button;