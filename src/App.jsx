import { useState } from "react";
import Navbar from "./components/Navbar";
import ErrorBoundary from "./components/ErrorBoundary";
import Home from "./pages/Home";
import initialStudents from "./data/students";
import "./App.css";

function App() {
  const [students, setStudents] = useState(initialStudents);

  const addStudent = (newStudent) => {
    setStudents([...students, newStudent]);
  };

  const deleteStudent = (id) => {
    const updatedStudents = students.filter((student) => student.id !== id);
    setStudents(updatedStudents);
  };

  return (
    <ErrorBoundary>
      <Navbar totalStudents={students.length} />

      <Home
        students={students}
        onAddStudent={addStudent}
        onDeleteStudent={deleteStudent}
      />
    </ErrorBoundary>
  );
}

export default App;