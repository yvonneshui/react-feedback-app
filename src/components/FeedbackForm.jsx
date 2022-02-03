import Card from "./share/Card";
import { useState } from "react";
import Button from "./share/Button";
import RatingSelect from "./RatingSelect";
function FeedbackForm({handleAdd}) {

	const[text,setText]=useState('')
	const[rating,setRating]=useState(10)//10 is default value
	const[btnDisabled,setBtnDisabled]=useState(true)//true is default value
	const[message,setMessage]=useState('')

	const handleTextChange=(e)=>{
		if(text===''){
			setBtnDisabled(true)
			setMessage(null)
		}else if(text!==''&&text.trim().length<=10){
			setBtnDisabled(true)
			setMessage('Text must be longer than 10 letters')
		}else{
			setMessage(null)
			setBtnDisabled(false)
		}
		setText(e.target.value);
	}

	const handleSubmit=(e)=>{
		e.preventDefault()
		if(text.trim().length>=10){
			const newFeedback={
				text:text,
				rating:rating
			}
			handleAdd((newFeedback));
		}
		
		setText('')
	}

	return <Card>
		<form onSubmit={handleSubmit}>
			<h2>
				How would you rate your service with us?
				</h2>
				<RatingSelect select={(rating)=>setRating(rating)}/>
				<div className="input-group">
					<input 
					onChange={handleTextChange} 
					type="text" 
					placeholder="Write a review" 
					value={text}/>
					<Button 
					type='submit'
					isDisabled={btnDisabled}>Send</Button>
					<div>
						{message
						&&<div className="message">{message}</div>}
					</div>
				</div>
		</form>
		</Card>;
}

export default FeedbackForm;
