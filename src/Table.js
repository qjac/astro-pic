import React, { Component } from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>Name</th>
        <th>Job</th>
      </tr>
    </thead>
  );
};

const TableBody = (props) => {
  const rows = props.characterData.map((row, index) => {
    return (
      <tr key={index}>
        <td>{row.name}</td>
        <td> {row.job}</td>
        <td>
          <button onClick={() => props.removeCharacter(index)}>
            Delete {row.name}
          </button>
        </td>
      </tr>
    );
  });

  return <tbody>{rows}</tbody>;
};

const Table = (props) => {
  const { characterData, removeCharacter } = props;

  return (
    <table>
      <TableHeader />
      <TableBody
        characterData={characterData}
        removeCharacter={removeCharacter}
      />
    </table>
  );
};
// class Table extends Component {
//   render() {
//     const { characterData, removeCharacter } = this.props;

//     return (
//       <table>
//         <TableHeader />
//         <TableBody
//           characterData={characterData}
//           removeCharacter={this.removeCharacter}
//         />
//       </table>
//     );
//   }
// }

export default Table;
