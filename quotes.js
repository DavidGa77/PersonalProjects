var answers = ["I'm afraid not", "The outlook is good", "Not in a million years", "Hmm ... I'm thinking about it",
             "Stranger things have happened", "Yoda says 'Yes, the answer is!'", "100% yes!", "Does not compute",
             "Ask me again later", "Its a no from me"]

function fortune() {
	alert(answers[Math.floor(Math.random() * 9)]);
}