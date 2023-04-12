import { useState } from 'react';
import axios from 'axios';

const useGetQuestions = () => {
  const [questions, setQuestions] = useState([]);

  const getNewQuestions = async () => {
    const res = await axios('https://opentdb.com/api.php?amount=10');
    setQuestions(res.data.results);
  }

  return {questions, getNewQuestions};
};

export default useGetQuestions;