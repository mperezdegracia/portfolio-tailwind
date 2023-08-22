import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Typography,
  Tooltip,
  IconButton
} from "@material-tailwind/react";
import { homeData } from "../data/homeData";
import { TimelineWithIcon } from "./education";







export function ProfileCard({data}) {
  return (
    <Card className="w-96 min-w-[24rem]  lg:m-0 mx-auto dark:bg-secondary bg-primary_light  ">
      <CardHeader floated={false} className=" h-96">
        <img src="mateo_2.jpg" alt="profile-picture"/>
      </CardHeader>
      <CardBody className="text-center">
        <Typography variant="h4" className="text-contrast  font-primary mb-2 ">
          {data.name}
        </Typography>
        <Typography variant="h5" className="font-medium font-primary text-tertiary " textGradient>
          {data.title}
        </Typography>
      </CardBody>
      <CardFooter className="flex justify-center gap-7 pt-2">
        <Tooltip content="Like">
          <Typography
            as="a"
            href="#facebook"
            variant="lead"
            color="blue"
            textGradient
          >
            <i className="fab fa-facebook" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#twitter"
            variant="lead"
            color="light-blue"
            textGradient
          >
            <i className="fab fa-twitter" />
          </Typography>
        </Tooltip>
        <Tooltip content="Follow">
          <Typography
            as="a"
            href="#instagram"
            variant="lead"
            color="purple"
            textGradient
          >
            <i className="fab fa-instagram" />
          </Typography>
        </Tooltip>
      </CardFooter>
    </Card>
  );
} 
export default function Presentation() {
  const home_data = homeData;
  return (
    <div className=" md:flex justify-center items-center pt-10 min-h-full mb-10">
      <ProfileCard data={home_data}  ></ProfileCard>
      <div className="md:mx-3 mx-auto lg:w-2/3 items-center py-5 px-10">

        <Typography  className="text-secondary_light  dark:text-contrast font-light font-primary lg:w-auto lg:text-3xl md:text-xl ">

          {home_data.description_1}

        </Typography>
      
        <Typography className="mb-10 text-secondary_light dark:text-contrast font-light font-primary lg:w-auto  lg:text-3xl md:text-xl ">

          {home_data.description_2}

        </Typography>


        <TimelineWithIcon></TimelineWithIcon>

      </div>
    </div>



  )
}