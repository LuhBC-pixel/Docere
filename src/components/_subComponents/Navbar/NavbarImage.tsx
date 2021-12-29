import Image from "next/image"
import Link from "next/link"
import Logo from "../../../assets/Docere-logo.png"

import { Flex, Box } from "@chakra-ui/react"

const NavbarImage = () => {
	return (
		<Flex alignItems={"center"}>
			<Box>
				<Link href="/" passHref>
					<Image src={Logo} width={100} height={100} alt="Docere logo, possui um farol e embaixo tem o nome Docere" />
				</Link>
			</Box>
		</Flex>
	)
}

export default NavbarImage
