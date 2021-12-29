import dynamic from "next/dynamic"

const HomeTitle = dynamic(() => import("../_subComponents/Home/HomeTitle"))
const HomeImage = dynamic(() => import("../_subComponents/Home/HomeImage"))

import { Container, Stack } from "@chakra-ui/react"

const Index = () => {
	return (
		<Container maxW={"7xl"} id="#">
			<Stack
				align={"center"}
				spacing={{ base: 8, md: 10 }}
				py={{ base: 20, md: 28 }}
				direction={{ base: "column", md: "row" }}>
				<HomeTitle />
				<HomeImage />
			</Stack>
		</Container>
	)
}

export default Index
