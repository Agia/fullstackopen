import { useState } from 'react'


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.',
    'The only way to go fast, is to go well.',
  ]

  const [selected, setSelected] = useState(0)
  const [vote, setVote] = useState(new Array(anecdotes.length).fill(0))

  console.log(vote)

  const getRandomNumber = (maxNum) => {
    return Math.floor(Math.random() * maxNum)
  }

  const handleNextAnecdoteClick = () => {
    setSelected(getRandomNumber(anecdotes.length))
  }

  const handleVoteClick = () => {
    const newVotesArr = [...vote]
    newVotesArr[selected] += 1
    setVote(newVotesArr)
  }

  const indexOfMaxVote = vote.reduce((currentMaxIndex, x, index, a) => x > a[currentMaxIndex] ? index : currentMaxIndex, 0);

  return (
    <div>
      <h2>Anecdote of the day</h2>
      <p>{anecdotes[selected]}</p>
      <p>has {vote[selected]} vote{vote[selected] !== 1 ? "s" : ""}.</p>
      <button onClick={handleVoteClick}>Vote</button>
      <button onClick={handleNextAnecdoteClick}>Next Anecdote</button>
      <h2>Anecdote with the most votes</h2>
      <p>{anecdotes[indexOfMaxVote]}</p>
    </div>
  )
}

export default App
