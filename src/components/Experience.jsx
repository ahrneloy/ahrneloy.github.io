import { VerticalTimeline, VerticalTimelineElement } from "react-vertical-timeline-component/dist-modules"
import { motion } from 'framer-motion';

import 'react-vertical-timeline-component/style.min.css'

import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";

const ExperienceCard = ({ experiences }) => (
  <VerticalTimelineElement
  contentStyle={{ background: '#1d1836', color: '#fff'}}
  contentArrowStyle={{ borderRight: '7px solid #232631'}}
  date={experiences.date}
  iconStyle={{ background: experiences.iconbg}}
  icon={
    <div className="flex justify-center items-center w-full h-full">
      <img
        src={experiences.icon}
        alt={experiences.comapany_name}
        className="w-[60%] h-[60%]
        object-contain"
        />
    </div>
  }
>

  <div>
    <h3 className="text-white text-[24px] font-bold">
      {experiences.title}
    </h3>
    <p className="text-secondary text-[16px] font-bold" style={{ margin: 0 }}
    >{experiences.comapany_name}</p>
  </div>

</VerticalTimelineElement>
)

const Experience = () => {
  return (
    <>
    <motion.div variants={textVariant()}>
    <p className={styles.sectionSubText}>
        What I have done so far
      </p>
      <h2 className={styles.sectionHeadText}>
        Work Experience
      </h2>
    </motion.div>

    <div className="mt-20 flex flex-col">
      <VerticalTimeline>
        {experiences.map((experiences, index) => (
          <ExperienceCard key={index} experiences=
          {experiences} />
        ))}
      </VerticalTimeline>
    </div>
    </>
  )
}

export default SectionWrapper(Experience, "")