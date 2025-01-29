import { useState } from "react"

export const useDisclosure = (defaultState = false)=>{
	const [isOpen,setIsOpen] = useState(defaultState);
	function onOpen(){
		setIsOpen(true);
	}
	function onClose(){
		setIsOpen(false);
	}
	return {isOpen,onOpen,onClose};
}