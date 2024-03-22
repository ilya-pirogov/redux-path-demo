import {push, remove, update} from '@/redux/store';
import {get} from 'object-path';
import {useDispatch, useSelector} from 'react-redux';

type ConfigAPI<T> = {
  value: T;
  update: (val: T) => void;
  push: (val: any) => void;
  remove: (idx: number) => void;
}

export function useConfig<T>(path: string, transform?: (value: unknown) => T): ConfigAPI<T> {
  // select the value from the store by path
  const value: T = useSelector((state: object) => get(state, `config.${path}`));
  const dispatch = useDispatch();

  // simple way to convert string to desired type
  const t = transform ?? ((x: unknown) => x);

  // provide API to easily update, insert, and remove values
  return {
    value,
    update: (val: T) => dispatch(update([path, t(val)])),
    push: (val: any) => dispatch(push([path, t(val)])),
    remove: (idx: number) => dispatch(remove([`${path}.${idx}`])),
  }
}
