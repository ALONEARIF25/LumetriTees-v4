// Get all the question elements
const questions = document.querySelectorAll('.faq .question');

// Loop through each question element
questions.forEach((question) => {
  // Get the answer element for this question
  const answer = question.nextElementSibling;

  // Hide the answer by default
  answer.style.maxHeight = 0;

  // Add a click event listener to the question element
  question.addEventListener('click', () => {
    // Toggle the active class on the question element
    question.classList.toggle('active');

    // Check if the answer element is currently hidden
    if (answer.style.maxHeight) {
      // Answer is currently visible, so hide it
      answer.style.maxHeight = null;
    } else {
      // Answer is currently hidden, so show it
      answer.style.maxHeight = `${answer.scrollHeight}px`;
    }
  });
});
