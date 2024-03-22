import React from 'react';

type Props = {
  className?: string;
  children: React.ReactNode;
  label: string;
}

export function Field(props: Props) {
  return <div className={"flex items-center border-t border-slate-400/20 min-h-12 " + props.className}>
    <span className="w-1/5 flex-none">{props.label}</span>
    <span className="">
      {props.children}
    </span>
  </div>;
}
