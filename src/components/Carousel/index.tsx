import styles from "./carousel.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import ProductCard from "../ProductCard";
import { Product } from "../../typescript/interfaces/product.interface";
import { useEffect, useState } from "react";

interface CarouselProps {
	products: Product[];
}

const Carousel = ({ products }: CarouselProps) => {
	const [slidesPerView, setSlidesPerView] = useState<number>(6);

	useEffect(() => {
		const handleResize = () => {
			const windowWidth = window.innerWidth;
			if (windowWidth <= 500) {
				setSlidesPerView(1);
			} else if (windowWidth <= 640) {
				setSlidesPerView(2);
			} else if (windowWidth <= 1024) {
				setSlidesPerView(3);
			} else if (windowWidth <= 1400) {
				setSlidesPerView(4);
			} else {
				setSlidesPerView(6);
			}
		};

		handleResize();

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className={styles.container}>
			<Swiper
				slidesPerView={slidesPerView}
				spaceBetween={30}
				autoplay={{
					delay: 1500,
					disableOnInteraction: false,
					pauseOnMouseEnter: true,
				}}
				loop={true}
				pagination={{
					clickable: true,
				}}
				navigation={true}
				modules={[Autoplay, Pagination, Navigation]}
				className={styles.my_swiper}
			>
				{products.map(product => (
					<SwiperSlide>
						<ProductCard key={product.id} {...product} />
					</SwiperSlide>
				))}
			</Swiper>
		</div>
	);
};

export default Carousel;
