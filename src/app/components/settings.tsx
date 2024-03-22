import {useConfig} from '@/app/hooks/use-config';
import {useNav} from '@/app/hooks/use-nav';
import {Checkbox} from '@/app/widgets/checkbox';
import {Field} from '@/app/widgets/field';
import {Input} from '@/app/widgets/input';
import {List} from '@/app/widgets/list';
import {Panel} from '@/app/widgets/panel';

type Props = {
  path: string;
  title: string;
}

export function Settings(props: Props) {
  const an = useConfig<[] | undefined>(`${props.path}.activeNodes`);
  const {navPush} = useNav();

  return (
      <Panel>
        <h1 className="pt-4 text-xl font-normal">{props.title}</h1>

        <div className="mt-10 flex flex-col">
          <Field label="Endpoints">
            <List path={`${props.path}.endpoints`}/>
          </Field>

          <Field label="Token">
            <Input path={`${props.path}.token`}/>
          </Field>

          <Field label="Timeout">
            <Input path={`${props.path}.timeout`} transform={Number}/>
          </Field>

          <Field label="Debug">
            <Checkbox path={`${props.path}.debug`}/>
          </Field>

          {an?.value && <Field label="Active Nodes">
            {an?.value?.map((node: string, index: number) =>
                <button className="p-2 m-2 bg-sky-50 rounded" key={node}
                        onClick={() => navPush(`nodes.${node}.settings`, `Node ${node}`, 'Settings')}>
                  Edit {node}
                </button>,
            )}
          </Field>}

        </div>
      </Panel>
  );
}
