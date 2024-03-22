import {useConfig} from '@/app/hooks/use-config';
import React from 'react';

type Props = {
  className?: string;
  transform?: (value: unknown) => any;
  path: string;
}

export function Input(props: Props) {
  const {value, update} = useConfig(props.path, props.transform ?? String);

  return <div
      className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-600 sm:max-w-md">
    <input
        className="block flex-1 border-0 bg-slate-50 py-1.5 pl-1 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
        type="text"
        defaultValue={String(value)}
        onBlur={(ev) => update(ev.currentTarget.value)}/>
  </div>;
}
