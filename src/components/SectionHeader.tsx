interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
}

export default function SectionHeader({
  label,
  title,
  description,
}: SectionHeaderProps) {
  return (
    <div className="mb-16 text-center">
      <span className="text-sm font-medium text-primary-400 tracking-wider uppercase">
        {label}
      </span>
      <h2 className="mt-3 text-3xl md:text-4xl font-bold text-white">
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-surface-400 max-w-2xl mx-auto text-lg">
          {description}
        </p>
      )}
    </div>
  );
}
