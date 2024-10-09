import React from "react";

function Members () {
const members = ["Alice", "Bob", "Charlie", "Diana"]; // This could be fetched from an API
  return (
    <div>
      <ol>
        {members.map(member => <li key={member}>{member}</li>)}
      </ol>
    </div>
  );
}

export default Members;