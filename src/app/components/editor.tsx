import {useNav} from '@/app/hooks/use-nav';
import * as components from '@/app/components/index';

type Props = {}

export function Editor(props: Props) {
  // select the top component of the stack
  const {stack, navPop} = useNav();
  const lastFrame = stack[stack.length - 1];

  // mapping the name to the component
  const Component = components[lastFrame.component as keyof typeof components];

  return <>
    <Component path={lastFrame.path} title={lastFrame.title} key={lastFrame.path}/>
    <button className="ml-4" onClick={() => navPop(1)}>Back</button>
  </>;
}
