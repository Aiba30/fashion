export const Card = ({picture,name,desc,price,activePrice})=>{
	return(
		<div className="card">
			<img src={picture} alt="card-img" className="card-image" />
			<p className="card-name">{name}</p>
			<h6 className="card-description">{desc}</h6>
			<div className="card-prices">
				<span className="card-price">{price}</span>
				<span className="card-price active">{activePrice}</span>
			</div>
		</div>
	)
}