import Image from 'next/image'
import { MapPin } from 'react-feather'
import { Detail } from './Detail'

function SectionTitle(props) {
  return (
    <h4
      className="col-span-2 text-lg font-semibold text-primary md:text-right md:text-base md:font-normal md:text-opacity-40"
      {...props}
    />
  )
}

function SectionContent(props) {
  return <div className="col-span-10" {...props} />
}

function TableRow({ href, title, subtitle, date }) {
  return (
    <a
      href={href}
      className="flex items-center space-x-4 group"
    >
      <strong className="flex-none font-medium text-gray-900 group-hover:text-indigo-600 dark:text-gray-100 dark:group-hover:text-indigo-500">
        {title}
      </strong>
      <span className="w-full border-t border-gray-300 border-dashed shrink dark:border-gray-800" />
      {subtitle && <span className="flex-none text-tertiary text-sm md:text-base">{subtitle}</span>}
      {date && <span className="flex-none font-mono text-quaternary hidden md:flex">{date}</span>}
    </a>
  )
}

function SectionContainer(props) {
  return (
    <div
      className="grid items-start grid-cols-1 md:grid-cols-12 gap-3 md:gap-6"
      {...props}
    />
  )
}

export function Home() {
  return (
    <Detail.Container>
      <Detail.ContentContainer>
        {/* Avatar */}
        <div className="justify-center flex mb-6 md:ml-20 dark:hidden">
          <Image
            src="/static/img/horse.png"
            alt="Miles"
            width={900}
            height={600}
            quality={100}
          />
        </div>

        <div className="pb-24 md:pb-4 space-y-12 md:space-y-16 dark:mt-8">
          {/* Bio */}
          <SectionContainer>
            <SectionTitle />
            <SectionContent>
              <div className="prose -mb-8">
                <p>
                  Hey, I'm Miles! I'm a Data Scientist at a the DOJ and like building with LLMs in my free time.
                  I graduated from both Harvard and the University of Michigan with degrees in Data Science and Computer Science and now I live in DC.
                </p>
                <p className="-mb-2">
                  In the past, I've worked on:
                </p>
                <ul>
                  <li>Ad optimization at <a href="https://www.meta.com/">Meta</a></li>
                  <li>Suicide Predection at <a href="https://www.nytimes.com/2022/09/30/health/suicide-predict-smartphone.html">Harvard Nock Lab</a></li>
                  <li>Fraud detection at <a href="https://www.aaa.com/"> AAA insurance</a></li>
                  <li>Targeted Donations at <a href="https://umich.edu">University of Michigan</a></li>
                </ul>
              </div>
            </SectionContent>
          </SectionContainer>

          {/* Socials */}
          <SectionContainer>
            <SectionTitle>Online</SectionTitle>
            <SectionContent>
              <div className="flex flex-col space-y-3">
                <TableRow
                  href={'mailto:butlermiles83@gmail.com'}
                  title={'Email'}
                  subtitle={'Send'}
                  date={''}
                />
                <TableRow
                  href={'https://github.com/MilesButler2019'}
                  title={'GitHub'}
                  subtitle={'Follow'}
                  date={''}
                />
                <TableRow
                  href={'https://twitter.com/ishan0102'}
                  title={'Twitter'}
                  subtitle={'Follow'}
                  date={''}
                />
              </div>
            </SectionContent>
          </SectionContainer>


          {/* Spotify Widget */}
          <SectionContainer>
            <SectionTitle>Music</SectionTitle>
            <SectionContent>
              <iframe className="rounded-xl" src="https://open.spotify.com/embed/playlist/11Zn9cx3d6D2AFugwUHFRB?utm_source=generator" width="100%" height="380" frameBorder="0" allowFullScreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"></iframe>
            </SectionContent>
          </SectionContainer>
        </div>
      </Detail.ContentContainer>
    </Detail.Container>
  )
}
