const Card = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="bg-card shadow-lg rounded-2xl p-4 flex flex-col gap-4">
      {children}
    </div>
  );
};

export default Card;