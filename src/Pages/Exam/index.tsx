import React from 'react';
import {useSelector} from "react-redux";
import {RootState} from "../../redux/store";

const Index = () => {
  const exam = useSelector((state: RootState) => state.exam)
  const user = useSelector((state: RootState) => state.user)


  return (
    <div>
      Here you start your tests you picked option {user.option}

      {exam.map((qu,i)=> (
        <div key={i}>
          <h4>{qu.question}</h4>
          {qu.answer.map((option, i)=> (
            <div>
              {option.options.optionLetter}) {option.options.option}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Index;