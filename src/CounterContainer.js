import React, { useCallback } from "react";
import Counter from "./Counter";
import { useSelector, useDispatch, useStore } from "react-redux";

const INCREMENT = "counter2/INCREMENT";
const DECREMENT = "counter2/DECREMENT";

const CounterContainer = props => {
  const counter = useSelector(state => state.counter2);
  const dispatch = useDispatch();

  const decreaseCounter = useCallback(() => {
    dispatch({ type: DECREMENT });
  }, [dispatch]);

  const increaseCounter = useCallback(() => {
    dispatch({ type: INCREMENT });
  }, [dispatch]);


  //같은 프로바이더 안에 있는 리덕스 스토어 레퍼런스를 리턴함
  //아마 useSelector 위주로 사용하게 될것임. 
  //하지만 가아끔 스토어에 접근해야하는 경우, 리듀서 교체를 해야하는 경우에만 쓰인다.
  const store = useStore(); 

  // EXAMPLE ONLY! Do not do this in a real app.
  // The component will not automatically update if the store state changes
  // 진짜 앱에선 이렇게 쓰지 말기. 
  // 스토어에 변화가 일어나도 컴포넌트가 자동으로 업데이트 안함.
  console.log("store", store.getState());

  console.log("counter", counter);
  return (
    <>
      <Counter
        number={counter}
        //이렇게 하는 방법도 있지만 useCallback를 쓰는 걸 추천한다. 리덕스는
        // onDecrease={() => dispatch({ type: DECREMENT })}
        onDecrease={decreaseCounter}
        onIncrease={increaseCounter}
      />
    </>
  );
};

export default CounterContainer;
