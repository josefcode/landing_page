import { AirplaneTilt } from "@phosphor-icons/react"
import { Root } from "./FooterStyle"

export const Footer = () => {
  return (
    <Root>
      <AirplaneTilt size={40} weight="fill" color = '#00c2c5' />
        <p>© 2020 Insert Name Here. All rights reserved.</p>
    </Root>
  )
}
