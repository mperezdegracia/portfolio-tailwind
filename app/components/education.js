import {
    Timeline,
    TimelineItem,
    TimelineConnector,
    TimelineHeader,
    TimelineIcon,
    TimelineBody,
    Typography,
  } from "@material-tailwind/react";
  import { HomeIcon, BellIcon, CurrencyDollarIcon } from "@heroicons/react/24/solid";
import { education } from "../data/educationData";
   
  export function TimelineWithIcon() {
    const data = education;
    return (
      <div className="lg:w-[50%] sm:min-w-none md:min-w-none bg-primary_light dark:bg-secondary rounded-xl p-4 ">
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-2">
                <HomeIcon className="h-4 w-4" />
              </TimelineIcon>
              <Typography variant="h5" className="text-contrast font-bold font-primary" >
                {data.title_hs} <span className="font-medium">{data.duration_hs}</span>
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography  className="font-normal text-gray-400 font-primary">
                    {data.institution_hs}
                    <br></br>
                    <strong className="font-bold">{data.description_hs}</strong>
                     
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader>
              <TimelineIcon className="p-2">
                <BellIcon className="h-4 w-4" />
              </TimelineIcon>
              <Typography variant="h5" className="text-contrast font-bold font-primary " >
                {data.title_uni}  <span className="font-medium">{data.duration_uni}</span>
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography  className="font-normal text-gray-400 font-primary">
                {data.institution_uni}
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    );
  }