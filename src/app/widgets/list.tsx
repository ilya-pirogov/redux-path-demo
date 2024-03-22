import {useConfig} from '@/app/hooks/use-config';
import {Input} from '@/app/widgets/input';
import React from 'react';

type Props = {
  className?: string;
  path: string;
}

export function List(props: Props) {
  const {value, remove, push} = useConfig<[]>(props.path);

  return (
    <div className={"container " + props.className}>
      {value.map((item: string, index: number) => <div key={`${props.path}.${index}:${String(value)}`}>
        <div className="flex space-x-3 mb-1">
          <Input path={`${props.path}.${index}`} /> <button onClick={()=> remove(index)}>Remove</button>
        </div>
      </div>)}
      <button className="py-3" onClick={() => push('')}>Add</button>
    </div>
  );
}
