import React from "react";
import { useSelector, useDispatch } from "react-redux";
const RenderTestComponent = props => {
  /*
    자신이 가지고 있는 state[변수명]이 변화가 일어나면 해당 변화에 따라 그 state를 가지고 있는 
    컴포넌트는 랜더가 일어난다.
    글로벌 useState 느낌이다. 
    */
  const counter = useSelector(state => state.counter2);

  return (
    <div>
      자신이 가지고 있는 해당 state 변수가 변화가 안일어나면 해당 컴포넌트는
      따로 랜더를 안한다 쩐다!
    </div>
  );
};
export default RenderTestComponent;
