import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { createGoal, getGoals } from '../features/goals/goalSlice'

function GoalForm() {
  const [text, setText] = useState('')
  const dispatch = useDispatch()

  const onSubmit = async (e) => {
    e.preventDefault()

    // Dispatch the createGoal action
    const resultAction = await dispatch(createGoal({ text }))

    // Check if the creation was successful
    if (createGoal.fulfilled.match(resultAction)) {
      // Refresh the goals list
      dispatch(getGoals())
    }

    setText('') // Clear the input field
  }

  return (
    <section className='form'>
      <form onSubmit={onSubmit}>
        <div className='form-group'>
          <label htmlFor='text'>Notes</label>
          <input
            type='text'
            name='text'
            id='text'
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div className='form-group'>
          <button className='btn btn-block' type='submit'>
            Add Notes
          </button>
        </div>
      </form>
    </section>
  )
}

export default GoalForm
