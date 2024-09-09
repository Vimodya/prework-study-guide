import React from "react";

function TopicsList({ topics, onSelectTopic }) {
  return (
    <div>
      <h1>Study Topics</h1>
      <ul>
        {topics.map((topic) => (
          <li key={topic.id} onClick={() => onSelectTopic(topic.id)}>
            {topic.name}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TopicsList;
