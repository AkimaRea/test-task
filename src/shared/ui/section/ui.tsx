import s from "./styles.module.scss";
import cx from "classnames";

interface SectionProps {
  children?: React.ReactNode;
  withPadding?: boolean;
  className?: string;
}

export const Section = ({
  children,
  withPadding = true,
  className,
}: SectionProps) => {
  return (
    <section className={cx(s.section, withPadding && s.withPadding, className)}>
      {children}
    </section>
  );
};
