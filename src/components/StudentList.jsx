import StudentCard from "./StudentCard";

function StudentList({ students, onDelete, children }) {
  if (students.length === 0) {
    return <h3>No Students Found</h3>;
  }

  return (
    <div>
      {children}

      <div className="student-list">
        {students.map((student) => (
          <StudentCard
            key={student.id}
            student={student}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
}

export default StudentList;