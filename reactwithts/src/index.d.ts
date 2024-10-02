import './index.css';
interface Counter {
    count: number;
}
declare const store: import("redux").Store<Counter, any, unknown>;
export type RootState = ReturnType<typeof store.getState>;
export {};
