import { useState } from 'react'


const AddTask = () => {

    const [text, setText] = useState('')
    const [date, setDate] = useState('')
    const [reminder, setReminder] = useState(false)


    return (
        <form action="" className="add-form">
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add Task" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Date & Time</label>
                <input type="text" placeholder="Add Date & Time" value={date} onChange={(e) => setDate(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Set Reminder</label>
                <input type="checkbox" value={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type="submit" value='Save Task' className="btn btn-block" />

        </form>

    )
}

export default AddTask
