import Section from "./Section"
import Heading from "./Heading"
import { benefits } from "../constants"
import Arrow from "../assets/svg/Arrow"

import {GradientLight} from "./design/Benefits"

import ClipPath from "../assets/svg/ClipPath"

const Projects = () => {
  return (
    <Section 
      className={`pt-[4rem] mb-[5.25rem]`}
      crosses
      crossesOffset="lg:translate-y-[5.25rem]"
      customPaddings
      id="projects"
    >
      <div className="container lg:mt-[12rem]  xl:mt-[12rem] z-2">
        <div>
        <Heading className={"absolute max-x-md -mt-[1.70rem] lg:-mt-[2.25rem] xl:-mt-[2.25rem] lg:max-w-2xl"} title="PROJECTS" />
        </div>
        <div className=" backdrop-blur-[2px] xl:backdrop-blur-[3px]  xl:rounded-tl-[35px] rounded-tl-[30px]">
          <div className="flex flex-wrap gap-10  mb-10" >
            {benefits.map((item)=>(
              <div className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]" 
              style={{
                backgroundImage: `url(${item.backgroundUrl})`,
                backdropFilter: 'blur(3px)'
              }}
              key={item.id}>
                <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                  <h5 className="h2 mb-5">{item.title}</h5>
                  <p className="body-2 mb-6 text-n-3">{item.text}</p>
                  <div className="flex items-center mt-auto">
                    <img 
                      src={item.iconUrl} 
                      width={30}
                      height={30}
                      alt={item.title}
                    />
                    <p className="ml-auto font-code text-xs font-bold text-n-1 uppdercase tracking-wider">Explore</p>
                    <Arrow/>
                  </div>
                </div>
                {item.light && <GradientLight/> }

                {/* <div className="absolute inset-0.5 bg-n-8"
                  style={{
                    clipPath: `url(#benefits)`
                  }}
                >
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                    {item.imageUrl && (
                      <img
                       src={item.imageUrl}
                       width={380}
                       height={362}
                       alt={item.title}
                       className="w-full h-full object-cover"
                      />
                    )}
                  </div>
                </div>     */}
                <ClipPath/>
              </div>
              
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default Projects
