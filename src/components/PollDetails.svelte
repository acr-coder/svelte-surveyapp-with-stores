<script>
    import PollStore from '../stores/PollStore.js';
    import Card from '../shared/Card.svelte';
    import Button from '../shared/Button.svelte';

    export let poll;
    

    // reactive values
    $: totalVotes = poll.votesA + poll.votesB;
    $:percentA = Math.floor(100 / totalVotes * poll.votesA);
    $:percentB = Math.floor(100 / totalVotes * poll.votesB);

    const handleVote = (option, id) => {     

      PollStore.update(currentPolls => {
        let copiedPolls = [...currentPolls];
        let upvotedPoll = copiedPolls.find((poll) => poll.id == id);

        if (option === 'a'){
          upvotedPoll.votesA++;
        }
        if (option === 'b'){
          upvotedPoll.votesB++;
        }

        return copiedPolls;
      })      
    }

    const handleDelete = (id) => {
        PollStore.update(currentPolls => {
          return currentPolls.filter(poll => poll.id != id)
        })
    }

</script>

<Card>
<div class="poll">
    <h3>{poll.question}</h3>
    <p>Total votes: { totalVotes }</p>
    <div class="answer" on:click={() => handleVote('a',poll.id)} >
        <div class="percent percent-a" style="width: {percentA}%" ></div>
        <span>{poll.answerA} ({ poll.votesA }) </span>
    </div>
    <div class="answer" on:click={() => handleVote('b',poll.id)} >
        <div class="percent percent-b"  style="width: {percentB}%" ></div>
        <span>{poll.answerB} ({ poll.votesB }) </span>
    </div>
    <div class="delete">
      <Button flat={true} on:click={() => handleDelete(poll.id)} >X</Button>
    </div>
</div>
</Card>

<style>
    h3{
    margin: 0 auto;
    color: rgb(238, 226, 226);
  }
  p{
    margin-top: 6px;
    font-size: 14px;
    color: rgb(231, 247, 14);
    margin-bottom: 30px;
  }
  .answer{
    background: #fafafa;
    cursor: pointer;
    margin: 10px auto;
    position: relative;
    opacity: 0.5;
  }
  .answer:hover{
    opacity: 1;
  }
  span{
    display: inline-block;
    padding: 10px 20px;
    color: rgb(19, 1, 1);
  }
  .percent{
    height: 100%;
    position: absolute;
    box-sizing: border-box;
  }
  .percent-a{
    border-left: 4px solid #d91b42;
    background: rgba(217, 27, 66, 0.6);
  }
  .percent-b{
    border-left: 4px solid #0b6d49;
    background: rgba(18, 209, 139, 0.6);
  }
  .delete{
    margin-top: 30px;
    text-align: center;
  }

</style>