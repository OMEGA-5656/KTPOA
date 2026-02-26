import { useState, useEffect } from 'react';

function Members() {
  const [members, setMembers] = useState([]);

  useEffect(() => {
    setMembers([
      { id: 1, name: 'John Doe', college: 'Engineering College A' },
      { id: 2, name: 'Jane Smith', college: 'Tech University B' }
    ]);
  }, []);

  return (
    <div>
      <h2>Association Members</h2>
      <ul>
        {members.map((member) => (
          <li key={member.id}>
            {member.name} - {member.college}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Members;