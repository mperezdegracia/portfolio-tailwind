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
   
  export function TimelineWithIcon() {
    return (
      <div className="lg:w-[50%] sm:min-w-none min-w-[32rem] bg-primary_light dark:bg-secondary rounded-xl p-4 ">
        <Timeline>
          <TimelineItem>
            <TimelineConnector />
            <TimelineHeader>
              <TimelineIcon className="p-2">
                <HomeIcon className="h-4 w-4" />
              </TimelineIcon>
              <Typography variant="h5" className="text-contrast font-bold font-primary" >
                Electronics Technician <span className="font-medium">(2015-2020)</span>
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography color="gary" className="font-normal text-gray-400">
                    ECEA Tecnical School.
                    <br></br>
                    <strong className="font-bold">Circuit Analysis, PCB fabrication and design.</strong>
                     
              </Typography>
            </TimelineBody>
          </TimelineItem>
          <TimelineItem>
            <TimelineHeader>
              <TimelineIcon className="p-2">
                <BellIcon className="h-4 w-4" />
              </TimelineIcon>
              <Typography variant="h5" className="text-contrast font-bold font-primary " >
                Software Engineer  <span className="font-medium">(2021-2026)</span>
              </Typography>
            </TimelineHeader>
            <TimelineBody className="pb-8">
              <Typography color="gary" className="font-normal text-gray-400">
                Buenos Aires Institute of Technology
              </Typography>
            </TimelineBody>
          </TimelineItem>
        </Timeline>
      </div>
    );
  }