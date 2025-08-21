const Loader = ({ className }: { className?: string }) => {
  return (
    <div className={`flex items-center justify-center ${className}`}>
      <div className="w-20 h-20 border-8 border-dashed rounded-full animate-spin  border-primary-blue"></div>
    </div>
  );
};

export default Loader;
