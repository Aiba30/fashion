import './footer.css';
import { Service } from './Service';
export const FooterRight = ()=>{
	return(
		<div className="footer-right">
			<h2 className="title">RECIVE EMAIL UPDATES</h2>
			<form className='form'>
				<input type="email" placeholder="Your Email Address" />
				<button>JOIN</button>
			</form>
			<div className="links">
				<Service title='SHOP' first='Shop'
				second='Collection' third='Outlet'
				fourth='Lookbook'/>
				<Service title='HELP' first='FAQ'
				second='Privecy Policy' third='Tearms and conditions'
				fourth='Return and Exchanges'/>
				<Service title='ABOUT' first='Journal'
				second='Our Story' third='Contact'
				fourth='Store Location'/>
			</div>
		</div>
	)
}