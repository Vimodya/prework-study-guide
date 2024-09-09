import React, { useState } from "react";
import TopicsList from "./TopicList";
import StudySuggestion from "./StudySuggestions";
import "./App.css";

function App() {
  const [topics] = useState([
    {
      id: 1,
      name: "HTML Basics",
      books: [
        "HTML & CSS: Design and Build Websites by Jon Duckett",
        "Learning Web Design by Jennifer Niederst Robbins",
      ],
    },
    {
      id: 2,
      name: "CSS Styling",
      books: [
        "CSS: The Definitive Guide by Eric Meyer",
        "CSS Secrets by Lea Verou",
      ],
    },
    {
      id: 3,
      name: "JavaScript Fundamentals",
      books: [
        "Eloquent JavaScript by Marijn Haverbeke",
        "You Don’t Know JS by Kyle Simpson",
      ],
    },
    {
      id: 4,
      name: "React Introduction",
      books: [
        "The Road to React by Robin Wieruch",
        "Fullstack React: The Complete Guide to ReactJS and Friends by Anthony Accomazzo, Nathaniel Murray, and Ari Lerner",
      ],
    },
  ]);

  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleSelectTopic = (topicId) => {
    const topic = topics.find((t) => t.id === topicId);
    setSelectedTopic(topic);
  };

  return (
    <div className="App">
      <TopicsList topics={topics} onSelectTopic={handleSelectTopic} />
      <StudySuggestion
        suggestion={
          selectedTopic
            ? `${
                selectedTopic.name
              } - Recommended Books: ${selectedTopic.books.join(", ")}`
            : "Select a topic to see suggestions."
        }
      />
    </div>
  );
}

export default App;
