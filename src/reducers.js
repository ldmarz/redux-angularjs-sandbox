import Counter from './actions';

export default function counter(state, action) {
  switch (action.type) {
  case Counter.WRITE_NAME:
    return {name: action.name};
  default:
    return state;
  }
}