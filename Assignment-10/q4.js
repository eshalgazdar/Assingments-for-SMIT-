function getStudentData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const students = {
                1: { id: 1, name: "Eshal Gazdar", course: "Computer Engineering" },
                2: { id: 2, name: "Zimmmal Gazdar", course: "Software Engineering" },
                3: { id: 3, name: "Arsalan Gazdar", course: "Electrical Engineering" }
            };

            if (students[id]) {
                resolve(students[id]);
            } else {
                reject("Student with ID " + id + " not found.");
            }
        }, 2000);
    });
}

async function loadStudents() {
    const ids = [1, 2, 3];
    for (let i = 0; i < ids.length; i++) {
        const id = ids[i];
        console.log("Loading data for Student ID " + id + "...");
        try {
            const data = await getStudentData(id);
            console.log("Student Data Received:", data);
        } catch (error) {
            console.log("Failed to load student:", error);
        }
    }
    console.log("All student records loaded.");
}

loadStudents();