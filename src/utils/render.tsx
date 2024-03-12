import React, { ReactNode } from "react";

interface ShowProps {
  children: ReactNode;
}

interface ShowWhenProps {
  isTrue: boolean;
  children: ReactNode;
}

interface ShowElseProps {
  render?: ReactNode;
  children?: ReactNode;
}

const Show: React.FC<ShowProps> & {
  When: React.FC<ShowWhenProps>;
  Else: React.FC<ShowElseProps>;
} = (props) => {
  let when: ReactNode | null = null;
  let otherwise: ReactNode | null = null;

  React.Children.forEach(props.children, (child) => {
    const children = child as React.ReactElement<any>;
    if (children.props.isTrue === undefined) {
      otherwise = children;
    } else if (!when && children.props.isTrue === true) {
      when = children;
    }
  });

  return when || otherwise;
};

const ShowWhen: React.FC<ShowWhenProps> = ({ isTrue, children }) => {
  return isTrue ? <>{children}</> : null;
};

const ShowElse: React.FC<ShowElseProps> = ({ render, children }) => {
  return render || children || null;
};

Show.When = ShowWhen;
Show.Else = ShowElse;

interface EachProps<T> {
  render: (item: T, index: number) => ReactNode;
  of: T[];
}

function Each<T>({ render, of }: EachProps<T>): ReactNode {
  return (
    <>
      {of.map((item, index) => (
        <React.Fragment key={index}>{render(item, index)}</React.Fragment>
      ))}
    </>
  );
}

export { Each, Show };
