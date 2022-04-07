import React, {memo} from 'react';

const Habit = memo(({habit, onIncrement, onDecrement, onDelete}) => {
  const handleIncrement = () => {
    onIncrement(habit);
  };

  const handleDecrement = () => {
    onDecrement(habit);
  };

  const handleDelete = () => {
    onDelete(habit);
  };
  return (
    <li className="habit">
      <span className="habit-name">{habit.name}</span>
      <span className="habit-count">{habit.count}</span>
      <button className="habit-button habit-increase" onClick={handleIncrement}>
        <i className="fa-solid fa-square-plus"></i>
      </button>
      <button className="habit-button habit-decrease" onClick={handleDecrement}>
        <i className="fa-solid fa-square-minus"></i>
      </button>
      <button className="habit-button habit-delete" onClick={handleDelete}>
        <i className="fa-solid fa-trash"></i>
      </button>
    </li>
  );
});

export default Habit;

// class Habit extends PureComponent {
//   // componentDidMount() {
//   //   console.log(`habit: ${this.props.habit.name} mounted`);
//   // }

//   // componentWillUnmount() {
//   //   console.log(`habit: ${this.props.habit.name} will unmounted`);
//   // }

//   handleIncrement = () => {
//     this.props.onIncrement(this.props.habit);
//   };

//   handleDecrement = () => {
//     this.props.onDecrement(this.props.habit);
//   };

//   handleDelete = () => {
//     this.props.onDelete(this.props.habit);
//   };

//   render() {
//     const {name, count} = this.props.habit;
//     return (
//       <li className="habit">
//         <span className="habit-name">{name}</span>
//         <span className="habit-count">{count}</span>
//         <button
//           className="habit-button habit-increase"
//           onClick={this.handleIncrement}
//         >
//           <i className="fa-solid fa-square-plus"></i>
//         </button>
//         <button
//           className="habit-button habit-decrease"
//           onClick={this.handleDecrement}
//         >
//           <i className="fa-solid fa-square-minus"></i>
//         </button>
//         <button
//           className="habit-button habit-delete"
//           onClick={this.handleDelete}
//         >
//           <i className="fa-solid fa-trash"></i>
//         </button>
//       </li>
//     );
//   }
// }

// export default Habit;
