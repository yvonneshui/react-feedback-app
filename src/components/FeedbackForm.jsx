import Card from "./share/Card";
import {useContext, useState,useEffect} from "react";
import Button from "./share/Button";
import RatingSelect from "./RatingSelect";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackForm() {
	const[text,setText]=useState('')
	//10 is default value
	const[rating,setRating]=useState(10)
	const[btnDisabled,setBtnDisabled]=useState(true)
	const[message,setMessage]=useState('')
	//get functions from context
	const{addFeedback,feedbackEdit,updateFeedback}=useContext(FeedbackContext)

	useEffect(()=>{
		if(feedbackEdit.edit===true){
			setBtnDisabled(false)
			setText(feedbackEdit.item.text)
			setRating(feedbackEdit.item.rating)
		}
	},[feedbackEdit])

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

			if(feedbackEdit.edit===true){
				updateFeedback(feedbackEdit.item.id,newFeedback)
			}else{
				addFeedback(newFeedback)
			}
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
