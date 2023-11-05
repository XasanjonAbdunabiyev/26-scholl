import { Navbar as FlowbiteNavbar } from 'flowbite-react'

export default function Navbar() {
	return (
		<FlowbiteNavbar className="p-4 bg-[#55678a] bg-opacity-25  backdrop-blur-xl shadow-sm sticky top-0 left-0 w-full z-50">
			<div className="font-bold text-2xl cursor-pointer flex items-center gap-1">
				<span className="text-[#0F0681] font-nunito font-extrabold cursor-pointer">
					26th School Profile
				</span>
			</div>
			<FlowbiteNavbar.Toggle />
			<FlowbiteNavbar.Collapse>
				<FlowbiteNavbar.Link
					className="font-nunito font-medium text-lg"
					href="#about">
					About us
				</FlowbiteNavbar.Link>
				<FlowbiteNavbar.Link
					className="font-nunito font-medium text-lg"
					href="#academics">
					Academics
				</FlowbiteNavbar.Link>
				<FlowbiteNavbar.Link
					className="font-nunito font-medium text-lg"
					href="#student-life">
					School life
				</FlowbiteNavbar.Link>
				<FlowbiteNavbar.Link
					className="font-nunito font-medium text-lg"
					href="/">
					School life
				</FlowbiteNavbar.Link>
				<FlowbiteNavbar.Link
					className="font-nunito font-bold text-lg"
					href="#contact"
					active>
					Contact Us
				</FlowbiteNavbar.Link>
			</FlowbiteNavbar.Collapse>
		</FlowbiteNavbar>
	)
}
