import './footer.css';
export const FooterLeft = ()=>{
	return(
		<div className="footer-left">
			<div className="info">
				<div className="logo">YOUR LOGO</div>
				<p className="desc">We earned a reputation of being good at what we do.
					Let us take your online shop to new dimension in success!
				</p>
			</div>
			<div className="contacts">
				<div className="address">
					<img src="/location.svg" alt="location" />
					<p>Comilla, Bangladesh 3500</p>
				</div>
				<div className="contact">
					<a href="mailto:kawsarahmed0210@gmail.com" className="mail">
						kawsarahmed0210@gmail.com
					</a>
					<div className="line"></div>
					<a href="tel:01647470457" className="number">
						01647470457
					</a>
				</div>
				<div className="socials">
						<img src="/facebook instagram twitter linkedin.jpg" alt="socials" />
					</div>
			</div>
		</div>
	)
}