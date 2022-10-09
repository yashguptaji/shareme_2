import React from "react";
import { NavLink, Link } from "react-router-dom";
import { RiHomeFill } from "react-icons/ri";
import { categories } from "../utils/data";

import logo from "../assets/logo.png";
import logo_white from "../assets/logowhite.png";

const isNotActiveStyle =
	"flex items-center px-5 gap-3 text-gray-500 hover:text-black dark:hover:text-white transition-all duration-200 ease-in-out capitalize ";
const isActiveStyle =
	"flex items-center px-5 gap-3 font-extrabold border-r-2 border-black  transition-all duration-200 ease-in-out capitalize dark:text-white";

const Sidebar = ({ user, closeToggle }) => {
	const handleCloseSidebar = () => {
		if (closeToggle) {
			closeToggle(false);
		}
	};

	return (
		<div className="flex dark:bg-slate-900 dark:text-white flex-col justify-between bg-white h-full overflow-y-scroll min-w-210 hide-scrollbar">
			<div className="flex flex-col">
				<Link
					to="/"
					className="flex px-5 gap-2 my-6 pt-1 w-190 items-center"
					onClick={handleCloseSidebar}
				>
					<div className="visible dark:hidden">
						<img src={logo} alt="logo_white" className="" />
					</div>

					<div className="hidden dark:block">
						<img src={logo_white} alt="logo_black" className="" />
					</div>
				</Link>
				<div className="flex flex-col gap-2">
					<NavLink
						to="/"
						className={({ isActive }) =>
							isActive ? isActiveStyle : isNotActiveStyle
						}
						onClick={handleCloseSidebar}
					>
						<RiHomeFill />
						Home
					</NavLink>
					<h3 className="mt-2 px-5 text-base 2xl:text-xl">
						Discover categories
					</h3>
					{categories.slice(0, categories.length - 1).map((category) => (
						<NavLink
							to={`/category/${category.name}`}
							className={({ isActive }) =>
								isActive ? isActiveStyle : isNotActiveStyle
							}
							onClick={handleCloseSidebar}
							key={category.name}
						>
							<img
								src={category.image}
								alt="category"
								className="w-8 h-8 rounded-full shadow-sm"
							/>
							{category.name}
						</NavLink>
					))}
				</div>
			</div>
			{user && (
				<Link
					to={`user-profile/${user._id}`}
					className="flex my-5 mb-3 gap-2 p-2 items-center dark:text-white dark:bg-slate-900 bg-white rounded-lg shadow-lg mx-3"
					onClick={handleCloseSidebar}
				>
					<img
						src={user.image}
						className="w-10 h-10 rounded-full"
						alt="user-profile"
					/>
					<p>{user.userName}</p>
				</Link>
			)}
		</div>
	);
};

export default Sidebar;
