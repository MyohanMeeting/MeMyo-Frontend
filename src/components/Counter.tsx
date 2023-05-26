import { useDispatch, useSelector } from 'react-redux';
import { RootState, setName } from '../main';

function Counter() {
  const { name, count } = useSelector((state: RootState) => state.test);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>
        Counter {name} {count}
      </h1>
      <button onClick={() => dispatch(setName({ name: 'hello' }))}>set name!</button>
    </div>
  );
}

export default Counter;
