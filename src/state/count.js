import store from '../store';

const log = (name, fn) => (...args) => {
  console.log(`Action: ${name}`, args);
  return fn(...args);
}

export const useCount = () => {
  const [{ count }] = store.useStore();

  return count;
};

export const useIncrement = () => {
  const [_, setState] = store.useStore();
  
  return log('increment', () =>
    setState(old => ({
      ...old,
      count: old.count + 1
    }))
  )
};

export const useDecrement = () => {
  const [_, setState] = store.useStore();

  return () => 
    setState(old => ({
      ...old,
      count: old.count - 1
    }));
};

export const useAsyncIncrement = () => {
  const increment = useIncrement();

  return async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    increment();
  };
};