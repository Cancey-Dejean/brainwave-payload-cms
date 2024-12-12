export type CompanyLogosProps = {
  className?: string;
  text?: string;
  children?: React.ReactNode;
};

const CompanyLogos = ({ className, children, text }: CompanyLogosProps) => {
  return (
    <div className={className}>
      <h5 className="tagline mb-6 text-center text-white/50">
        {text || "Trusted by"}
      </h5>
      <div className="flex">{children}</div>
    </div>
  );
};

export default CompanyLogos;
