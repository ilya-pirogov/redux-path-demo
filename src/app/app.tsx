"use client";

import {Breadcrumbs} from '@/app/components/breadcrumbs';
import {Editor} from '@/app/components/editor';
import {Result} from '@/app/widgets/result';
import {store} from '@/redux/store';
import React from 'react';
import {Provider} from 'react-redux';

type Props = {
};

export function App(props: Props) {

  return (
    <div className="lg:mr-[600px]">
      <Provider store={store}>
        <Breadcrumbs />
        <Editor />
        <Result path="config" />
      </Provider>
    </div>
  );
}
