import { useEffect, useState } from "react";
import AnswersList from "./AnswersList";

function Survey() {
  const [open, setOpen] = useState(false); //Ignore this state
  const [formData, setFormData] = useState({
    color: "",
    spendTime: [],
    review: "",
    name: "",
    email: "",
  })
  const [surveys, setSurveys] = useState([
    {
      id: 1,
      color: "1",
      spendTime: ["swimming"],
      review: "Love it",
      name: "Hans",
      email: "hans@hans.hans",
    }
  ])

  const handleChange = (event) => {
    const {name, value, type} = event.target;
    if (type === "radio") {
      setFormData({...formData, [name]: value });
    }
    if (type === "checkbox") {
      let currentSpendTimes = formData.spendTime;
      if (currentSpendTimes.includes(value)) {
        currentSpendTimes = currentSpendTimes.filter(item => item != value);
      } else {
        currentSpendTimes = [...currentSpendTimes, value];
      }
      console.log(currentSpendTimes);
      setFormData({...formData, [name]: currentSpendTimes});
    }
    else {
      setFormData({...formData, [name]: value});
    }
    console.log(formData);
  }

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Form data ", formData);

    setSurveys([
      ...surveys,
      {
        id: Math.max(...surveys.map((o) => o.id + 1)),
        color: formData.color,
        spendTime: formData.spendTime,
        review: formData.review,
        name: formData.name,
        email: formData.email, 
      }
    ]);
    setFormData({
      color: "",
      spendTime: [],
      review: "",
      name: "",
      email: "",
    });
  }

  // To print surveys after the list is updated
  useEffect(() => {
      console.log("Surveys: ", surveys);
  }, [surveys])

  return (
    <main className="survey">
      <section className={`survey__list ${open ? "open" : ""}`}>
        <h2>Answers list</h2>
        {/* answers should go here */}
        <AnswersList props={surveys} />
      </section>
      <section className="survey__form">
        {/* a form should be here */}
        <form className="form">
          <h2>Tell us what you think about your rubber duck!</h2>
            <div className="form__group radio">
              <h3>How do you rate your rubber duck colour?</h3>
              {/* <!-- Radio inputs go here --> */}
              <ul>
                <li>
                  <input 
                    id="color-one" 
                    type="radio" 
                    name="color" 
                    value="1" 
                    onChange={handleChange}
                    checked={formData.color === "1"}
                  />
                  <label htmlFor="color-one">1</label>
                </li>
                <li>
                  <input 
                    id="color-two" 
                    type="radio" 
                    name="color" 
                    value="2" 
                    onChange={handleChange}
                    checked={formData.color === "2"}
                  />
                  <label htmlFor="color-two">2</label>
                </li>
                <li>
                  <input 
                    id="color-three" 
                    type="radio" 
                    name="color" 
                    value="3"
                    onChange={handleChange}
                    checked={formData.color === "3"} 
                  />
                  <label htmlFor="color-three">3</label>
                </li>
                <li>
                  <input 
                    id="color-four" 
                    type="radio" 
                    name="color" 
                    value="4" 
                    onChange={handleChange}
                    checked={formData.color === "4"}                  
                  />
                  <label htmlFor="color-four">4</label>
                </li>
              </ul>
            </div>
            <div className="form__group">
              <h3>How do you like to spend time with your rubber duck</h3>
              {/* <!-- checkboxes go here --> */}
              <ul>
                <li>
                  <label>
                    <input 
                      name="spendTime" 
                      type="checkbox" 
                      value="swimming"
                      onChange={handleChange}
                      checked={formData.spendTime.includes("swimming")}
                    />Swimming
                  </label>
                </li>
                <li>
                  <label>
                    <input 
                      name="spendTime" 
                      type="checkbox" 
                      value="bathing" 
                      onChange={handleChange}
                      checked={formData.spendTime.includes("bathing")}
                    />Bathing
                  </label>
                </li>
                <li>
                  <label>
                    <input 
                      name="spendTime" 
                      type="checkbox" 
                      value="chatting"
                      onChange={handleChange}
                      checked={formData.spendTime.includes("chatting")}
                    />Chatting
                  </label>
                </li>
                <li>
                  <label>
                    <input 
                      name="spendTime" 
                      type="checkbox" 
                      value="noTime" 
                      onChange={handleChange}
                      checked={formData.spendTime.includes("noTime")}
                    />I don't like to spend time with it
                  </label>
                </li>
              </ul>
            </div>
            <label>What else have you got to say about your rubber duck?
              <textarea 
                name="review" 
                cols="30" 
                rows="10"
                value={formData.review}
                onChange={handleChange}
              />
            </label>
            <label>Put your name here (if you feel like it):
              <input 
                type="text" 
                name="name" 
                value={formData.name}
                onChange={handleChange} 
              />
            </label>
            <label>Leave us your email pretty please??
              <input 
                type="email" 
                name="email" 
                value={formData.email}
                onChange={handleChange} 
              />
            </label>
            <input 
              className="form__submit" 
              type="submit" 
              value="Submit Survey!" 
              onClick={handleSubmit}
            />
        </form>
      </section>
    </main>
  );
}

export default Survey;
