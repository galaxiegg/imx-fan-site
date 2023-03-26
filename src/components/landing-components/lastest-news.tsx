import React from "react";
import EventCard from "../common/cards/event-card";

const LatestNews = () => {
  return (
    <section className="py-28 w-screen">
      <h1 className=" text-4xl">Latest News & Events</h1>
      <p className="text-secondary">
        Be the first to discover Immutable updates, announcements and more.
      </p>

      <div className="flex flex-col md:flex-row gap-8 my-8 md:my-16 ">
        <EventCard
          title="News"
          readMoreLink="#"
          listOfEvents={[
            "A Game-Changing Partnership: Immutable and Polygon...",
            "Illuvium Trading Rewards Spotligh...",
            "The Story of ImmutableX and Illuvium’s Partnership...",
            "Roboworld and ImmutableX: Pushing the Boundaries of Web3 Gaming...",
          ]}
          image="https://res.cloudinary.com/dvqgzhqsi/image/upload/v1679794465/image_9_qugtao.png"
        />
        <EventCard
          title="Events"
          readMoreLink="#"
          listOfEvents={[
            "Event title goes right here. It can be long or short, Sharad can make it work...",
            "Heath is going to be the next crypto millionaire... ",
            "Heath on Youtube - Follow our CEO and learn more... ",
            "Heath on Twitter - Follow our CEO and learn more about the Immutable world...",
          ]}
          image="https://res.cloudinary.com/dvqgzhqsi/image/upload/v1679794526/Leonardo_Creative_alien_world_galaxy_all_very_detailed_and_ren_1_1_zfsjaw.png"
        />
      </div>
    </section>
  );
};

export default LatestNews;
