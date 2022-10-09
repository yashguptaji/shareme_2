import React from "react";
import Masonry from "react-masonry-css";
import Pin from "./Pin";

const breakpointColumnsObj = {
	default: 4,
	3000: 6,
	2000: 5, //no of items per col where col width is given
	1200: 3,
	1000: 2,
	500: 1,
};

const MasonryLayout = ({ pins }) => {
	return (
		<Masonry
			className="flex animate-slide-fwd"
			breakpointCols={breakpointColumnsObj}
		>
			{pins?.map((pin) => (
				<Pin key={pin._id} pin={pin} className="w-max" />
			))}
		</Masonry>
	);
};

export default MasonryLayout;
