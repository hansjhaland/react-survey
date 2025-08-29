import AnswersItem from "./AnswersItem";

export default function AnswersList({ props = [] }) {
  console.log("Inside AnswersList: ", props);

  // const answersList  = props;
  
  return (
    <ul>
      {props.map((answerItem, i) => (
        <AnswersItem answerItem={answerItem} key={i} />
      ))}
    </ul>
  );
}

