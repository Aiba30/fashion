import { Card } from "./Card"
import './fashion.css';
export const WFashion = ()=>{
	const images = ['/8.jpg','/9.jpg','/6.jpg','/7.jpg'];
	return(
		<section className="fashion">
			<div className="text-content">
				<h3 className="fashion-title">WOMEN’S FASHION</h3>
				<p className="fashion-subtitle">Shop our new arrivals from established brands</p>
			</div>
			<div className="card-container">
				{images.map(img=>{
					return (
					<Card picture={img} name='IGURE' desc='GREEN MUSCLE FIT POLO SHIRT'
					price='$229.00' activePrice='$129.00'/>
				)
				})}
			</div>
		</section>
	)
}