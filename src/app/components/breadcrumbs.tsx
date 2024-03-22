import {useNav} from '@/app/hooks/use-nav';

type Props = {}

export function Breadcrumbs(props: Props) {
  // manipulates the stack
  const {stack, goto} = useNav();

  return (
    <nav>
      <ol className="flex space-x-4 divide-x text-gray-500">
        {stack.map(({title, path}, index) => (
          <li key={path} className="pl-4">
            <button onClick={() => goto(index)}>{title}</button>
          </li>
        ))}
      </ol>
    </nav>
  );
}
