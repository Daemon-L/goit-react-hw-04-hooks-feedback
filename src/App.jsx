import { useState } from "react";
import Section from './components/Section/Section';
import FeedbackOptions from './components/FeedbackOptions/FeedbackOptions';
import Statistics from './components/Statistics/Statistics';
import Notification from './components/Notification/Notification';


export default function App() {
    const[Good, setGood] = useState(0);
    const[Neutral, setNeutral] = useState(0);
    const [Bad, setBad] = useState(0);

    const counterFeetback = option => {
        if (option === "Good") {
            setGood(Good + 1);
        }

        if (option === "Neutral") {
            setNeutral(Neutral + 1);
        }

        if (option === "Bad") {
            setBad(Bad + 1);
        }
    };

    const countTotalFeedback = () => {
        const totalFeedback = Good + Neutral + Bad;
        return totalFeedback;
    };

    const countPositiveFeedbackPercentage = () => {
        const percent = (Good * 100) / countTotalFeedback();
        return Math.round(percent);
    };
    
    return (
        <>
            <Section title="Please laeve feetback">
                <FeedbackOptions
                    options={["Good", "Neutral", "Bad"]}
                    onLeaveFeedback={counterFeetback}
                />
            </Section>

            {Good || Neutral || Bad  ? (
                <Section title="Statistics">
                    <Statistics
                        good={Good}
                        neutral={Neutral}
                        bad={Bad}
                        total={countTotalFeedback()}
                        percent={countPositiveFeedbackPercentage()}
                    />
                </Section>
            ) :
            (<Notification message="There is no feedback" />)}
        </>
    );
}
