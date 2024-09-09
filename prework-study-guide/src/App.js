import React, { useState } from "react";
import TopicsList from "./TopicList";
import StudySuggestion from "./StudySuggestions";
import "./App.css";

function App() {
  const [topics] = useState([
    { id: 1, name: "HTML Basics" },
    { id: 2, name: "CSS Styling" },
    { id: 3, name: "JavaScript Fundamentals" },
    { id: 4, name: "React Introduction" },
  ]);

  const [selectedTopic, setSelectedTopic] = useState(null);

  const handleSelectTopic = (topicId) => {
    const topic = topics.find((t) => t.id === topicId);
    setSelectedTopic(topic ? topic.name : "Please select a topic.");
  };

  return (
    <div className="App">
      <TopicsList topics={topics} onSelectTopic={handleSelectTopic} />
      <StudySuggestion
        suggestion={selectedTopic || "Select a topic to see suggestions."}
      />
    </div>
  );
}

export default App;
