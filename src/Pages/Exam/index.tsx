import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootState} from "../../redux/store";
import {useNavigate} from "react-router-dom";
import './styles.scss'
import {answerTo} from "../../redux/Exam/examSlice";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
const Index = () => {
  const exam = useSelector((state: RootState) => state.exam);
  const user = useSelector((state: RootState) => state.user);
  const [pickedOption, setPickedOption] = useState('');
  const [results, setResults] = useState(false);
  const [resultsPercentage, setResultsPercentage] = useState(0);
  const [counter, setCounter] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();


  useEffect(() => {
    if (localStorage.getItem('status') !== 'true') {
      navigate('/login')
    }
  }, []);

  useEffect(() => {
    if (counter === exam.length) {
      const correctAnswers = exam.filter(question => question.status === true);
      const percentage = (correctAnswers.length / exam.length) * 100;
      setResultsPercentage(percentage);
      setResults(true);
    }
  }, [counter, exam]);

  const nextQuestion = () => {
    setPickedOption('');
    if (counter !== exam.length) {
      dispatch(answerTo({
        pickedOption,
        counter
      }));
      setCounter(prevState => prevState + 1);
    }
  };

  const optionPicked = (optionLetter: string) => {
    setPickedOption(optionLetter);
  };

  return (
    <div className='exam__wrap'>
      {results && <Header/>}
      <h1>Here you start your tests, you picked option {localStorage.getItem('option')}</h1>


      {!results ? <div className='exam'>
        <h2>{exam[counter]?.question}</h2>
        <div className="exam__options">
          {exam[counter]?.options.map((option, i) => (
            <div className={`option ${pickedOption === option.optionLetter ? 'active' : ''}`} key={option.optionLetter}
                 onClick={() => optionPicked(option.optionLetter)}>
              {option.optionLetter}) {option.option}
            </div>
          ))}
        </div>
        <button onClick={() => nextQuestion()} disabled={!pickedOption && true}>next question</button>
      </div> : <div className="results">

        {resultsPercentage > 70 ? <h1>Congratulations you passed exam!!!</h1> :
          <h1>Unfortunately you could not pass exam( </h1>}
        <p>we should more than 70% but you got {resultsPercentage}%</p>
        {exam.map((que, i) => (
          <div key={i} className={`${que.status ? 'correct' : 'error'}`}>
            <h3>{i + 1}) {que.question}</h3>
            <p>Correct answer was <span style={{textTransform: "uppercase"}}>{que.correctAnswer}</span> and you
              answered <span style={{textTransform: "uppercase"}}>{que.userAnswer}</span></p>
          </div>
        ))}
      </div>}

      {results && <Footer/>}

    </div>
  );
};

export default Index;