import {useConfig} from '@/app/hooks/use-config';
import React from 'react';

type Props = {
  className?: string;
  path: string;
}

export function Checkbox(props: Props) {
  const {value, update} = useConfig(props.path, Boolean);

  return <input
      type="checkbox"
      checked={Boolean(value)}
      onChange={() => update(!value)}
  />;
}
