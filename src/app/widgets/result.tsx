import {Panel} from '@/app/widgets/panel';
import {get} from 'object-path';
import React from 'react';
import {useSelector} from 'react-redux';

type Props = {
  path?: string;
}

export function Result(props: Props) {
  const config = useSelector((state: object) => JSON.stringify(get(state, props.path ?? ''), null, 2));

  return <Panel className="lg:fixed right-2 top-2 bottom-2 max-w-[600px] pb-6">
    <div className="overflow-y-scroll h-full">
      <h1 className="py-4 text-xl font-normal">Result: </h1>
      <pre className="font-mono bg-blue-50 p-6 border rounded text-xs bg-gradient-to-b from-white to-sky-100">
    {config}
    </pre>
    </div>
  </Panel>;
}
