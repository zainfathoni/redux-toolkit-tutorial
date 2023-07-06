export const loggerMiddleware = (store) => (next) => (action) => {
  console.log("Dispatching action: ", action);
  let result = next(action);
  console.log("New state: ", store.getState());
  return result;
};
