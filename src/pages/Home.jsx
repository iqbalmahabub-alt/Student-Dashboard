import StudentForm from "../components/StudentForm";
import StudentList from "../components/StudentList";

function Home({ students, onAddStudent, onDeleteStudent }) {
  let batchMessage;

  if (students.length === 0) {
    batchMessage = "No Students Found";
  } else if (students.length <= 5) {
    batchMessage = "Small Batch";
  } else {
    batchMessage = "Large Batch";
  }

  const getSwitchMessage = () => {
    switch (true) {
      case students.length === 0:
        return "No Students Found";
      case students.length <= 5:
        return "Small Batch";
      default:
        return "Large Batch";
    }
  };

  return (
    <main className="home">
      <h1>Welcome to Student Dashboard</h1>

      <h3>If Else Message: {batchMessage}</h3>

      <h3>Switch Message: {getSwitchMessage()}</h3>

      <h3>
        Ternary Message:{" "}
        {students.length === 0
          ? "No Students Found"
          : students.length <= 5
          ? "Small Batch"
          : "Large Batch"}
      </h3>

      <StudentForm onAddStudent={onAddStudent} />

      <StudentList students={students} onDelete={onDeleteStudent}>
        <h2>Student List</h2>
      </StudentList>
    </main>
  );
}

export default Home;