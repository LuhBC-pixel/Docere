import dynamic from "next/dynamic"

import { Stack } from "@chakra-ui/react"
import { FaDev, FaGithub, FaLinkedin } from "react-icons/fa"

const FooterSocialButton = dynamic(() => import("./FooterSocialButton"))

const FooterIcons = () => {
	return (
		<Stack direction={"row"} spacing={6}>
			<FooterSocialButton label={"Github"} href={"https://github.com/LuhBC-pixel"}>
				<FaGithub />
			</FooterSocialButton>
			<FooterSocialButton label={"Linkedin"} href={"https://www.linkedin.com/in/luisa-boina-02294014b/"}>
				<FaLinkedin />
			</FooterSocialButton>
			<FooterSocialButton label={"Site Portofólio"} href={"https://meu-site-drab.vercel.app/"}>
				<FaDev />
			</FooterSocialButton>
		</Stack>
	)
}

export default FooterIcons
