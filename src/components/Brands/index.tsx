import styles from "./brands.module.scss";
import { useEffect, useState } from "react";
import { brands } from "../../json/brands";
import BrandCard from "./BrandCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const Brands = () => {
	const [isWideScreen, setIsWideScreen] = useState<boolean>(false);

	useEffect(() => {
		const checkScreenSize = () => {
			setIsWideScreen(window.innerWidth >= 768);
		};

		checkScreenSize();
		window.addEventListener("resize", checkScreenSize);

		return () => {
			window.removeEventListener("resize", checkScreenSize);
		};
	}, []);

	return (
		<section className={styles.container}>
			<h2 className={styles.title}>NUESTRAS MARCAS</h2>
			<div className={styles.brands_container}>
				<Swiper
					slidesPerView={isWideScreen ? 4 : 3}
					spaceBetween={30}
					autoplay={{
						delay: 1500,
						disableOnInteraction: false,
					}}
					modules={[Autoplay]}
					className={styles.mySwiper}
				>
					{brands.map(brand => (
						<SwiperSlide>
							<BrandCard key={brand.id} image={brand.image} title={brand.title} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</section>
	);
};

export default Brands;
