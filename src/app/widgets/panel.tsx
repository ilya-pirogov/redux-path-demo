import React from 'react';

type Props = {
  children: React.ReactNode;
  className?: string;
}

export function Panel(props: Props) {
  return (
      <div className={"container px-8 py-3 my-3 border rounded bg-white " + props.className}>
        {props.children}
      </div>
  );
}
