import {configureStore, createSlice} from '@reduxjs/toolkit';
import op from 'object-path';

const configSlice = createSlice({
  name: 'config',
  initialState: {
    config: {
      global: {
        settings: {
          endpoints: [
            'https://google.com/',
            'https://example.com/',
          ],
          timeout: 5000,
          debug: true,
          token: "abc123456",
          activeNodes: ['node1', 'node2'],
        },
      },
      nodes: {
        node1: {
          kind: 'kind1',
          settings: {
            endpoints: [
              'https://google.com/node1',
              'https://example.com/node2',
            ],
            token: "zxcqweasdfgh",
            flag: true,
            timeout: 1000,
          },
        },
        node2: {
          kind: 'kind1',
          settings: {
            endpoints: [
              'https://google.com/node1',
              'https://example.com/node2',
            ],
            token: "000000000000",
            flag: true,
            timeout: 1000,
          },
        },
        node3: {
          kind: 'kind3',
          settings: {
            endpoints: [
              'https://foo.com/node1',
              'https://bar.com/node2',
            ],
            token: "555555555555",
            flag: true,
            timeout: 1000,
          },
        },
      },
    },
    stack: [
        // initial page
      {title: "Main", path: "", component: "Main"},
    ]
  },
  reducers: {
    update(state, data) {
      const [path, value] = data.payload;
      op.set(state, `config.${path}`, value);
      return state;
    },

    push(state, data) {
      const [path, value] = data.payload;
      op.push(state, `config.${path}`, value);
      return state;
    },

    remove(state, data) {
      const [path] = data.payload;
      op.del(state, `config.${path}`);
      return state;
    },

    navPush(state, data) {
      if (state.stack.some((item) => item.path === data.payload.path)) {
        return state;
      }
      state.stack.push(data.payload);
      return state;
    },

    navPop(state, data) {
      const num = Math.min(Math.abs(Number(data.payload)), state.stack.length - 1);
      for (let i = 0; i < num; i++) {
        state.stack.pop();
      }
      return state;
    }
  },
});

export const {update, push, remove, navPop, navPush} = configSlice.actions;

export const store = configureStore({
  reducer: configSlice.reducer,
});

