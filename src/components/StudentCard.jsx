function StudentCard({ student, onDelete }) {
  return (
    <div className="student-card">
      <h3>{student.name}</h3>

      <p>Department: {student.department}</p>

      <p>CGPA: {student.cgpa}</p>

      <p>
        Status: {student.isActive ? "Active" : "Inactive"}
      </p>

      {student.isActive && <p className="active-msg">Currently Enrolled</p>}

      <p>
        Result:{" "}
        {(() => {
          if (student.cgpa >= 3.5) {
            return "Excellent";
          } else if (student.cgpa >= 3.0) {
            return "Good";
          } else {
            return "Needs Improvement";
          }
        })()}
      </p>

      <button onClick={() => onDelete(student.id)}>Delete</button>
    </div>
  );
}

export default StudentCard;