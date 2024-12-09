export type CompanyLogosProps = {
  className?: string;
  text?: string;
  children?: React.ReactNode;
};

const CompanyLogos = ({ className, children, text }: CompanyLogosProps) => {
  return (
    <div className={className}>
      <h5 className="tagline text-n-1/50 mb-6 text-center">
        {text || "Trusted by"}
      </h5>
      <ul className="flex">{children}</ul>
    </div>
  );
};

export default CompanyLogos;
