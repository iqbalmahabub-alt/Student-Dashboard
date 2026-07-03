import { useState } from "react";

function StudentForm({ onAddStudent }) {
  const [name, setName] = useState("");
  const [department, setDepartment] = useState("");
  const [cgpa, setCgpa] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const newStudent = {
      id: Date.now(),
      name: name,
      department: department,
      cgpa: Number(cgpa),
      isActive: true,
    };

    onAddStudent(newStudent);

    setName("");
    setDepartment("");
    setCgpa("");
  };

  return (
    <form className="student-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Student Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />

      <input
        type="text"
        placeholder="Department"
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
        required
      />

      <input
        type="number"
        step="0.01"
        placeholder="CGPA"
        value={cgpa}
        onChange={(e) => setCgpa(e.target.value)}
        required
      />

      <button type="submit">Add Student</button>
    </form>
  );
}

export default StudentForm;