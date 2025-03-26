function openModal(course) {
    // Get modal and course details
    const modal = document.getElementById("modal");
    const modalTitle = document.getElementById("modal-title");
    const modalDescription = document.getElementById("modal-description");

    // Define course content based on the clicked course
    let title, description;
    if (course === 'python') {
        title = "Programming with Python";
        description = "This course covers Python programming, from basic syntax to more advanced topics like object-oriented programming. You'll build projects and practice problem-solving skills!";
    } else if (course === 'web') {
        title = "Web Development";
        description = "Learn how to create beautiful websites using HTML, CSS, and JavaScript. This course covers everything from basic web structure to modern responsive design and interactivity.";
    } else if (course === 'cyber') {
        title = "Cybersecurity Essentials";
        description = "In this course, you'll explore the principles of cybersecurity, learn about network security, encryption, and how to protect systems from hackers.";
    } else if (course === 'ai') {
        title = "AI & Machine Learning";
        description = "Dive into the world of AI and ML with hands-on projects. Understand algorithms, neural networks, and how to apply machine learning models to real-world problems.";
    }

    // Update modal content
    modalTitle.innerHTML = title;
    modalDescription.innerHTML = description;

    // Show the modal
    modal.style.display = "block";
}

function closeModal() {
    const modal = document.getElementById("modal");
    modal.style.display = "none";
}

// Close the modal when clicking outside of the modal content
window.onclick = function(event) {
    const modal = document.getElementById("modal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
};
