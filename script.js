document.getElementById('question-form').addEventListener('submit', function(e) {
    e.preventDefault();

    // Get user inputs
    var academicLevel = document.getElementById('academic-level').value;
    var interests = document.getElementById('interests').value;

    // Perform career prediction
    var career = predictCareer(academicLevel, interests);

    // Display result
    alert('Based on your academic level and interests, your potential career is: ' + career);
});

function predictCareer(academicLevel, interests) {
    // Add your logic for career prediction here
    // This can be a simple if-else condition or a more complex algorithm
    // For simplicity, let's just return a random career from a predefined list
    var careers = ['Software Developer', 'Doctor', 'Engineer', 'Teacher', 'Graphic Designer'];
    var randomIndex = Math.floor(Math.random() * careers.length);
    return careers[randomIndex];
}
