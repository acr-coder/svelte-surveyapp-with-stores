import { writable } from 'svelte/store';

const PollStore = writable([
    {
        id:1,
        question: 'React or Svelte?',
        answerA: 'React',
        answerB: 'Svelte',
        votesA:9,
        votesB:15,
    },
])

export default PollStore;