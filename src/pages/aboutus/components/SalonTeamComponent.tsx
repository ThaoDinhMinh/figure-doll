import React from 'react'
import { TypeTeam } from '../../../interface'
import { ViewDiv, Text, LinkTo, Image } from './SalonTeam'
import FacebookIcon from '@mui/icons-material/Facebook'
import TwitterIcon from '@mui/icons-material/Twitter'
import InstagramIcon from '@mui/icons-material/Instagram'
interface TeamProps {
  team: TypeTeam
}

const SalonTeamComponent: React.FC<TeamProps> = (props) => {
  const { team } = props
  return (
    <ViewDiv className="teams-card">
      <ViewDiv className="g-on-img">
        <Image className="img-salon" src={team.img} alt="team salon" />
      </ViewDiv>
      <Text className="name">{team.name}</Text>
      <Text className="jog">{team.job}</Text>
      <ViewDiv className="g-icon">
        <ViewDiv className="icon-mui">
          <LinkTo href="https://www.facebook.com/">
            <FacebookIcon className="icon" sx={{ color: '#257be9' }} />
          </LinkTo>
        </ViewDiv>
        <ViewDiv className="icon-mui">
          <LinkTo href="https://twitter.com">
            <TwitterIcon className="icon" sx={{ color: '#229bf0' }} />
          </LinkTo>
        </ViewDiv>
        <ViewDiv className="icon-mui">
          <LinkTo href="https://www.instagram.com/">
            <InstagramIcon
              className="icon"
              sx={{
                color: '#ee3a7b',
              }}
            />
          </LinkTo>
        </ViewDiv>
      </ViewDiv>
    </ViewDiv>
  )
}

export default SalonTeamComponent
