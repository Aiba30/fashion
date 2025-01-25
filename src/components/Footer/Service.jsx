export const Service = ({title,first,second,third,fourth})=>{
	return(
		<div className="column">
					<h4 className="column__title">{title}</h4>
					<a href="#">{first}</a>
					<a href="#">{second}</a>
					<a href="#">{third}</a>
					<a href="#">{fourth}</a>
				</div>
	)
}