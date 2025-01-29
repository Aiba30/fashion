import './modal.css'
export const Modal = ({isOpen,close})=>{
	return(
		<div style={isOpen ? {display:'flex'} : {display:'none'}} className="modal">
			<div className="modal__content">
				<button onClick={close} className='close-modal'>&#x2715;</button>
				<h3 className='modal__title'>Войдите в свой аккаунт</h3>
				<hr className='hr' />
				<form onSubmit={(e)=>e.preventDefault()} className="modal__form">
					<input type="text" placeholder='Имя пользователя' />
					<input type="password" placeholder='Пароль' />
					<button>Авторизоваться</button>
				</form>
			</div>
		</div>
	)
}