import dynamic from "next/dynamic"
import { Button, Stack, HStack, IconButton, useColorMode } from "@chakra-ui/react"

import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons"
import { MoonIcon, SunIcon } from "@chakra-ui/icons"

const NavbarLinks = dynamic(() => import("../Navbar/NavbarLinks"))

interface NavbarIconsProps {
	isOpen: boolean
	onClose: () => void
	onOpen: () => void
}

const NavbarIcons = ({ isOpen, onClose, onOpen }: NavbarIconsProps) => {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<>
			<IconButton
				size={"md"}
				icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
				aria-label={"Open Menu"}
				display={{ md: "none" }}
				onClick={isOpen ? onClose : onOpen}
			/>
			<HStack spacing={8} alignItems={"center"}>
				<NavbarLinks />
				<Stack direction={"row"} spacing={7}>
					<Button onClick={toggleColorMode} aria-label="botão que faz o site mudar de cor">
						{colorMode === "light" ? <MoonIcon /> : <SunIcon />}
					</Button>
				</Stack>
			</HStack>
		</>
	)
}

export default NavbarIcons
