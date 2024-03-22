import {useConfig} from '@/app/hooks/use-config';
import {useNav} from '@/app/hooks/use-nav';
import {Field} from '@/app/widgets/field';
import {Panel} from '@/app/widgets/panel';
import React from 'react';

type Props = {
  path: string;
  title: string;
};

export function Main(props: Props) {
  const nodes = useConfig<Record<string, any>>(`nodes`);
  const {navPush} = useNav();

  return (
      <Panel>
        <h1 className="pt-4 text-xl font-normal">{props.title}</h1>

        <div className="mt-10 flex flex-col">
          <Field label="Global Settings">
            <button className="p-2 m-2 bg-sky-50 rounded"
                    onClick={() => navPush(`global.settings`, 'Global Settings', 'Settings')}
            >
              Edit Settings
            </button>
          </Field>

          {nodes && <Field label="All Nodes">
            {Object.entries(nodes.value).map(([k, v], index: number) =>
                <button className="p-2 m-2 bg-sky-50 rounded" key={k}
                        onClick={() => navPush(`nodes.${k}.settings`, `Node ${k}`, 'Settings')}>
                  Edit {k}
                </button>,
            )}
          </Field>}
        </div>
      </Panel>
  );
}
