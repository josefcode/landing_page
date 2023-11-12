import { SectionSubRoot, Video } from './MainSectionTwoStyle'

export const MainSectionTwo = () => {
  return (
    <section>
      <SectionSubRoot>
        <h2 className='sectionTwo__title'>Show visitors what they're signing up for</h2>
        <p className='sectionTwo__disc'>Include a video or photo from one of your sessions to help people understand your service (or just to hype ‘em up).</p>
      </SectionSubRoot>
      <Video>
          <video className = "sectionTwo__video" src="https://player.vimeo.com/external/436375775.sd.mp4?s=17eeaad1489dd587e1244ee60e4c87c798118bd5&profile_id=164&oauth2_token_id=57447761"  muted  autoPlay loop />
      </Video>
    </section>
  )
}
