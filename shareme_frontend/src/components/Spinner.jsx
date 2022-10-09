import React from "react";
import Loader from "react-loader-spinner";

const Spinner = ({ message }) => {
	return (
		<div className="flex flex-col justify-center items-center w-full h-full dark:bg-slate-900">
			<Loader
				type="Circles"
				color="#00bfff"
				height={50}
				width={200}
				className="m-5"
			/>
			<p className="text-lg text-center px-2">{message}</p>
		</div>
	);
};

export default Spinner;
