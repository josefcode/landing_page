import { AirplaneTilt } from "@phosphor-icons/react"
import { HeaderRoot, Root } from "./HeaderStyle"

export const Header = () => {
  return (
    <Root>
        <HeaderRoot>
            <AirplaneTilt size={40} weight="fill" color = '#152f2e' />
            <h1 className = "header__Title">Describe the value of booking an appointment</h1>
            <p className = "header__desc">No need to get clever. Tell people exactly what you're offering, then use this space to communicate your key value proposition.</p>
        </HeaderRoot>
    </Root>
  )
}
