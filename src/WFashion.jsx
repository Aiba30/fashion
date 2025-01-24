import { Card } from "./Card"

export const WFashion = ()=>{
	return(
		<section className="fashion">
			<div className="text-content">
				<h3 className="fashion-title">WOMEN’S FASHION</h3>
				<p className="fashion-subtitle">Shop our new arrivals from established brands</p>
			</div>
			<div className="card-container">
				<Card picture='/8.jpg' name='IGURE' desc='GREEN MUSCLE FIT POLO SHIRT'
				price='$229.00' activePrice='$129.00'/>
				<Card picture='/9.jpg' name='IGURE' desc='GREEN MUSCLE FIT POLO SHIRT'
				price='$229.00' activePrice='$129.00'/>
				<Card picture='/6.jpg' name='IGURE' desc='GREEN MUSCLE FIT POLO SHIRT'
				price='$229.00' activePrice='$129.00'/>
				<Card picture='/7.jpg' name='IGURE' desc='GREEN MUSCLE FIT POLO SHIRT'
				price='$229.00' activePrice='$129.00'/>
			</div>
		</section>
	)
}