import React from 'react';
import Habit from './habit';
import HabitAddForm from './habitAddForm';

const habits = ({
  habits,
  onIncrement,
  onDecrement,
  onDelete,
  onAdd,
  onReset,
}) => {
  return (
    <>
      <HabitAddForm onAdd={onAdd} />
      <ul>
        {habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </ul>
      <button className="habits-reset" onClick={onReset}>
        Reset All
      </button>
    </>
  );
};

export default habits;

// class Habits extends Component {
//   handleIncrement = (habit) => {
//     this.props.onIncrement(habit);
//   };

//   handleDecrement = (habit) => {
//     this.props.onDecrement(habit);
//   };

//   handleDelete = (habit) => {
//     this.props.onDelete(habit);
//   };

//   handleAdd = (name) => {
//     this.props.onAdd(name);
//   };

//   render() {
//     return (
//       <>
//         <HabitAddForm onAdd={this.handleAdd} />
//         <ul>
//           {this.props.habits.map((habit) => (
//             <Habit
//               key={habit.id}
//               habit={habit}
//               onIncrement={this.handleIncrement}
//               onDecrement={this.handleDecrement}
//               onDelete={this.handleDelete}
//             />
//           ))}
//         </ul>
//         <button className="habits-reset" onClick={this.props.onReset}>
//           Reset All
//         </button>
//       </>
//     );
//   }
// }

// export default Habits;
