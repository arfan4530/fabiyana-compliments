document.addEventListener('DOMContentLoaded', () => {
  const compliments = [
    "Fabiyana, you're as vibrant as a field of daisies and as delightful as a plate of momos!",
    "Fabiyana, your charm is as radiant as blooming roses and as heartwarming as steaming momos!",
    "Fabiyana, you're the perfect blend of elegance and comfort, like flowers and momos together!",
  ];

  const greetingElement = document.getElementById('greeting');
  const complimentElement = document.getElementById('compliment');
  const newComplimentButton = document.getElementById('new-compliment');

  // Set greeting
  greetingElement.textContent = "Hello, Fabiyana!";

  // Display random compliment
  const displayCompliment = () => {
    const randomCompliment = compliments[Math.floor(Math.random() * compliments.length)];
    complimentElement.textContent = randomCompliment;
  };

  displayCompliment();

  // Button to display another compliment
  newComplimentButton.addEventListener('click', displayCompliment);
});