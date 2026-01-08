import Image from 'next/image'
import { Mail, GitHub, Linkedin, ExternalLink } from 'react-feather'
import { Detail } from './Detail'

function SectionTitle(props) {
  return (
    <h4
      className="col-span-2 text-lg font-semibold text-primary font-grenette md:text-right md:text-base md:font-normal md:text-opacity-40"
      {...props}
    />
  )
}

function SectionContent(props) {
  return <div className="col-span-10" {...props} />
}

function SectionContainer(props) {
  return (
    <div
      className="grid items-start grid-cols-1 md:grid-cols-12 gap-3 md:gap-6"
      {...props}
    />
  )
}

function ExperienceCard({ href, role, company, description }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="experience-card block group"
    >
      <div className="flex items-start justify-between">
        <div>
          <h5 className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
            {role}
          </h5>
          <p className="text-sm text-tertiary mt-0.5">{company}</p>
        </div>
      </div>
      {description && (
        <p className="text-sm text-secondary mt-2">{description}</p>
      )}
    </a>
  )
}

function ContactLink({ href, icon: Icon, title }) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto') ? undefined : '_blank'}
      rel={href.startsWith('mailto') ? undefined : 'noopener noreferrer'}
      className="flex items-center gap-2 text-tertiary hover:text-indigo-500 transition-colors"
    >
      <Icon className="w-4 h-4" />
      <span className="text-sm">{title}</span>
    </a>
  )
}

function ProjectCard({ href, name, description, tags }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="experience-card block group"
    >
      <div className="flex items-start justify-between">
        <h5 className="font-medium text-gray-900 dark:text-gray-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
          {name}
        </h5>
        <ExternalLink className="w-4 h-4 text-tertiary group-hover:text-indigo-500 transition-colors" />
      </div>
      <p className="text-sm text-secondary mt-2">{description}</p>
      {tags && (
        <div className="flex flex-wrap gap-2 mt-3">
          {tags.map((tag) => (
            <span key={tag} className="text-xs px-2 py-1 rounded-full bg-gray-100 dark:bg-gray-700 text-tertiary">
              {tag}
            </span>
          ))}
        </div>
      )}
    </a>
  )
}

export function Home() {
  return (
    <Detail.Container>
      <Detail.ContentContainer>
        <div className="pb-24 md:pb-4 space-y-12 md:space-y-16">
          {/* Hero Section */}
          <div className="fade-in">
            <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
              {/* Headshot */}
              <div className="flex-shrink-0">
                <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-lg">
                  <Image
                    src="/static/img/2508_DC_LEAD_Headshots-02165.jpg"
                    alt="Miles Butler"
                    width={192}
                    height={192}
                    quality={100}
                    className="object-cover object-top"
                  />
                </div>
              </div>

              {/* Intro Text */}
              <div className="text-center md:text-left">
                <h1 className="text-3xl md:text-4xl font-bold text-primary font-grenette">
                  Miles Butler
                </h1>
                <p className="text-lg text-indigo-600 dark:text-indigo-400 mt-1 font-medium">
                  Turning Complexity into Clarity
                </p>
                <p className="text-secondary mt-4 max-w-lg">
                  AI Engineer at IBM. Harvard & University of Michigan alum with degrees in Data Science and Computer Science. Based in DC.
                </p>
                {/* Contact Links */}
                <div className="flex items-center justify-center md:justify-start gap-4 mt-4">
                  <ContactLink
                    href="mailto:butlermiles83@gmail.com"
                    icon={Mail}
                    title="Email"
                  />
                  <ContactLink
                    href="https://github.com/MilesButler2019"
                    icon={GitHub}
                    title="GitHub"
                  />
                  <ContactLink
                    href="https://www.linkedin.com/in/milescbutler/"
                    icon={Linkedin}
                    title="LinkedIn"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Experience */}
          <SectionContainer>
            <SectionTitle>Experience</SectionTitle>
            <SectionContent>
              <div className="grid gap-3 sm:grid-cols-2">
                <ExperienceCard
                  href="https://www.ibm.com/"
                  role="AI Engineer"
                  company="IBM"
                  description="Creating intelligent systems and AI tools for federal and defense clients"
                />
                <ExperienceCard
                  href="https://www.justice.gov/"
                  role="Data Scientist"
                  company="DOJ"
                  description="Lead reverse engineering of the RealPage case"
                />
                <ExperienceCard
                  href="https://www.meta.com/"
                  role="Ad Optimization"
                  company="Meta"
                  description="Built ML models for ad targeting and optimization"
                />
                <ExperienceCard
                  href="https://www.nytimes.com/2022/09/30/health/suicide-predict-smartphone.html"
                  role="Suicide Prediction"
                  company="Harvard Nock Lab"
                  description="Research on smartphone-based mental health prediction"
                />
                <ExperienceCard
                  href="https://www.aaa.com/"
                  role="Fraud Detection"
                  company="AAA Insurance"
                  description="Developed fraud detection systems"
                />
                <ExperienceCard
                  href="https://umich.edu"
                  role="Targeted Donations"
                  company="University of Michigan"
                  description="ML-driven donor targeting models"
                />
              </div>
            </SectionContent>
          </SectionContainer>

          {/* Projects */}
          <SectionContainer>
            <SectionTitle>Projects</SectionTitle>
            <SectionContent>
              <div className="grid gap-3 sm:grid-cols-2">
                <ProjectCard
                  href="https://resumetuned.com"
                  name="ResumeTuned"
                  description="AI-powered resume builder that helps job seekers tailor resumes to job descriptions and optimize for ATS systems"
                  tags={['AI', 'Next.js', 'SaaS']}
                />
                <ProjectCard
                  href="https://cowboyrental.pythonanywhere.com/"
                  name="DC Rental Monitor"
                  description="Scrapes 300,000 rental units in DC daily to monitor price and occupancy, revealing elasticity of demand in the housing market"
                  tags={['Python', 'Flask', 'Web Scraping']}
                />
              </div>
            </SectionContent>
          </SectionContainer>
        </div>
      </Detail.ContentContainer>
    </Detail.Container>
  )
}
