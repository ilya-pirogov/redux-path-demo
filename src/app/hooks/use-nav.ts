import {navPop, navPush} from '@/redux/store';
import {useDispatch, useSelector} from 'react-redux';

export function useNav() {
  const stack = useSelector((state: any) => state.stack) as Array<{title: string; path: string; component: string}>;
  const dispatch = useDispatch();

  return {
    stack,
    navPush: (path: string, title: string, component: string) => dispatch(navPush({path, title, component})),
    navPop: (count: number) => dispatch(navPop(count)),
    goto: (idx: number) => dispatch(navPop(idx + 1 - stack.length)),
  };
}
