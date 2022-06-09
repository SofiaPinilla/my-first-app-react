// import React from "react";

// class Welcome extends React.Component {
//   render() {
//     return (
//       <h1>
//         Hello {this.props.obj.name}, we are in {this.props.obj.place}
//       </h1>
//     );
//   }
// }

// export default Welcome

const Welcome = ({name}) => {
  return (
    <h2>Welcome {name}</h2>
  )
}

export default Welcome
