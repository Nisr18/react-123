import React from 'react';
function Namelist() {
  const Names = ['abc', 'def', 123];
  return (
    <div>
      {Names.map((n) => (
        <h1>{n}</h1>
      ))}
    </div>
  );
}
export default Namelist;
