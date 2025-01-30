import { useEffect, useState } from "react"

export const Timer = ({isOpen})=>{
	const [seconds,setSeconds] = useState(0);
	useEffect(()=>{
		let timer = setInterval(()=>{
			setSeconds(prev=>prev+1)
		},1000);
		return ()=>{
			clearInterval(timer);
			alert('sokdk')
		}
	},[]);
	
	return(
		<div className="timer">
			Компонент открыт {seconds} секунд
		</div>
	)
}