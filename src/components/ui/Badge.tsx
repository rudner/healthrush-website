interface BadgeProps {
  children: React.ReactNode;
  variant?: "green" | "blue" | "gray";
}

export default function Badge({ children, variant = "green" }: BadgeProps) {
  const styles = {
    green: "bg-brand-100 text-brand-600",
    blue: "bg-blue-100 text-blue-700",
    gray: "bg-gray-100 text-gray-600",
  };
  return (
    <span className={`inline-block px-2.5 py-0.5 rounded-full text-xs font-semibold ${styles[variant]}`}>
      {children}
    </span>
  );
}
