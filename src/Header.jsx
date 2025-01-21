export const Header = ()=>{
	return(
		<header className="header">
			<div className="header__logo">
				YOUR LOGO
			</div>
			<nav className="menu">
				<ul className="menu__list">
					<li className="menu__item">
						<a href="#">HOME</a>
						</li>
					<li className="menu__item">
						<a href="#">LOKBOOK</a>
						</li>
					<li className="menu__item">
						<a href="#">FEATURES</a>
						</li>
					<li className="menu__item">
						<a href="#">PAGES</a>
						</li>
					<li className="menu__item">
						<a href="#">BLOG</a>
						</li>
				</ul>
			</nav>
			<div className="header__btns">
				<button className="search-btn">
					<img className="search" src="/public/icons8-search.svg" alt="search" />
				</button>
				<button className="heart-btn">
					<img className="heart" src="/public/heart-svgrepo-com.svg" alt="heart" />
				</button>
				<button className="cart-btn">
					<img className="cart" src="/public/reshot-icon-shopping-cart-W2FJV6L7U5.svg" alt="cart" />
				</button>
			</div>
		</header>
	)
}