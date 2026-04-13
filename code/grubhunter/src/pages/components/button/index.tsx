import React from "react";
import styles from "./index.module.css";

interface PropsInterface {
  disabled?: boolean;
  children?: React.ReactNode;
  variant?: "blue" | "outline";
  clickHandler?: () => void;
}

const Button = (props: PropsInterface): React.JSX.Element => {
  const { disabled, children, variant, clickHandler } = props;
  const renderContent = (children: React.ReactNode) => {
    if (disabled) {
      return (
        <button className={styles.default} disabled>
          {children}
        </button>
      );
    }
    return (
      <button className={styles.blue} onClick={clickHandler}>
        {children}
      </button>
    );
  };
  return <>{renderContent(children)}</>;
};
export default Button;
