import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

const Index = () => {
  const exam = useSelector((state: RootState) => state.exam)
  const user = useSelector((state: RootState) => state.user)


  return (
    <div>
      Here you start your tests you picked option {user.option}

      {exam.map((qu, i) => (
        <div key={i}>
          <h4>{qu.question}</h4>
          {qu.options.map((option, i) => (
            <button key={i}>
              {option.optionLetter}) {option.option}
            </button>
          ))}
        </div>
      ))}
      <br/>
      <br/>
      <button>get results</button>
    </div>
  );
};

export default Index;