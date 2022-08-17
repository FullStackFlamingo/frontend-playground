import { useDispatch, useSelector } from 'react-redux';
import { increment, incrementByAmount } from '../store/sliceCounter';
import { RootState } from '../store';

export const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);

  const dispatch = useDispatch();

  if (import.meta.env.SSR) {
    dispatch(incrementByAmount(3));
  }

  const onClickIncrement = () => dispatch(increment());

  return (
    <div className="card">
      <button onClick={onClickIncrement}>count is {count}</button>
    </div>
  );
};
