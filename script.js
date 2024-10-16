const quotes = [
    "The best way to predict the future is to invent it.",
    "Life is 10% what happens to us and 90% how we react to it.",
    "Your time is limited, so don’t waste it living someone else’s life.",
    "Success is not the key to happiness. Happiness is the key to success.",
    "Don’t watch the clock; do what it does. Keep going.",
    "The only way to do great work is to love what you do.",
    "Believe you can and you're halfway there.",
    "The harder you work for something, the greater you'll feel when you achieve it.",
    "Don't stop when you're tired. Stop when you're done.",
    "Success doesn’t just find you. You have to go out and get it.",
    "Dream bigger. Do bigger.",
    "Your limitation—it's only your imagination.",
    "Sometimes we’re tested not to show our weaknesses, but to discover our strengths.",
    "The future belongs to those who believe in the beauty of their dreams.",
    "It does not matter how slowly you go as long as you do not stop.",
    "Hard times don’t create heroes. It is during the hard times when the 'hero' within us is revealed.",
    "Success is what comes after you stop making excuses.",
    "The only limit to our realization of tomorrow is our doubts of today.",
    "Don't wait for opportunity. Create it.",
    "Be the change that you wish to see in the world.",
    "In the middle of every difficulty lies opportunity.",
    "Act as if what you do makes a difference. It does.",
    "Happiness is not something ready-made. It comes from your own actions.",
    "Keep your face always toward the sunshine—and shadows will fall behind you.",
    "Opportunities don't happen. You create them.",
    "It always seems impossible until it's done.",
    "Start where you are. Use what you have. Do what you can.",
    "The secret of getting ahead is getting started.",
    "If you want to achieve greatness stop asking for permission.",
    "What seems to us as bitter trials are often blessings in disguise.",
    "The best way to get started is to quit talking and begin doing.",
    "Knowing is not enough; we must apply. Wishing is not enough; we must do.",
    "We generate fears while we sit. We overcome them by action.",
    "The successful warrior is the average man, with laser-like focus.",
    "Don’t wait for the right opportunity: create it.",
    "Whether you think you can or you think you can’t, you’re right.",
    "It’s not whether you get knocked down, it’s whether you get up.",
    "Failure will never overtake me if my determination to succeed is strong enough.",
    "The only place where success comes before work is in the dictionary.",
    "I never dreamed about success, I worked for it.",
    "It’s not what happens to you, but how you react to it that matters.",
    "The best revenge is massive success.",
    "Work hard in silence, let success make the noise.",
    "Success is walking from failure to failure with no loss of enthusiasm.",
    "I can’t change the direction of the wind, but I can adjust my sails to always reach my destination.",
    "I find that the harder I work, the more luck I seem to have.",
    "Quality is not an act, it is a habit.",
    "Do something today that your future self will thank you for.",
    "It always seems impossible until it’s done."
];

const para = document.querySelector("#para");
const btn = document.querySelector("#Btn");



let randomQuotesAre = 0;
btn.addEventListener("click", () => {
    para.innerHTML = quotes[randomQuotesAre];
    randomQuotesAre ++;

    if(randomQuotesAre >= quotes.length){
        randomQuotesAre = 0;
    }
    
});