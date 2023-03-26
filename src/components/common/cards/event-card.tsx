import React from "react";

interface EventCardProps {
  image: string;
  title: string;
  listOfEvents: string[];
  readMoreLink: string;
}

const EventCard = (props: EventCardProps) => {
  return (
    <div className="event-card w-full  flex flex-col lg:flex-row">
      <img
        src={props.image}
        alt={props.title}
        className="h-48 lg:h-full w-full lg:w-72 object-cover rounded-2xl"
      />
      <div className=" px-6 pb-10 pt-3">
        <p className="text-secondary">{props.title}</p>
        <div>
          {props.listOfEvents.map((item: string, index: number) => {
            const hideBorder = index + 1 === props.listOfEvents.length;
            return (
              <p
                key={item}
                className={`${
                  hideBorder ? "border-0" : "border-b-[1px]"
                }  border-[#303EA6] border-solid text-sm pb-3 pt-2`}
              >
                {item}
              </p>
            );
          })}
          <a className="text-secondary mt-2" href="#">
            Read More
          </a>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
