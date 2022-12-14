import { useDispatch, useSelector } from 'react-redux';
import { increment, incrementByAmount } from '../store/sliceCounter';
import { RootState } from '../store';

export const Counter = () => {
  const dispatch = useDispatch();

  const count = useSelector((state: RootState) => state.counter.value);

  const onClickIncrement = () => dispatch(increment());

  return (
    <div className="card">
      <button onClick={onClickIncrement}>count is {count}</button>
    </div>
  );
};
