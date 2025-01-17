import { check2, grid, loading1 } from "../assets";
import { roadmap } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import TagLine from "./TagLine";
import { Gradient } from "./design/Roadmap";
import Button from "./Button";

const Roadmap = () => {
  return (
    <Section id="roadmap" className="overflow-hidden">
      <div className="container md:pb-10">
        <Heading tag="Ready to Get Started" title="What we're Working on" />
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[7rem]">
          {roadmap.map((item) => {
            const status = item.status === "done" ? "Done" : "In Progress";

            return (
              <div
                key={item.id}
                className={`md:flex even:md:translate-y-[7rem] p-0.25 rounded-[2.5rem] ${
                  item.colorful ? "bg-conic-gradient" : "bg-n-6"
                }`}
              >
                <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                  <div className="absolute top-0 left-0 max-w-full">
                    <img
                      src={grid}
                      alt="grid"
                      width={550}
                      height={550}
                      className="w-full"
                    />
                  </div>
                  <div className="relative z-1">
                    <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                      <TagLine>{item.date}</TagLine>
                      <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                        <img
                          src={item.status === "done" ? check2 : loading1}
                          alt={status}
                          width={16}
                          height={16}
                          className="mr-2.5"
                        />
                        <div className="tagline">{status}</div>
                      </div>
                    </div>
                    <div className="mb-10 -my-10 -mx-15">
                      <img
                        src={item.imageUrl}
                        alt={item.title}
                        width={628}
                        height={426}
                        className="w-full"
                      />
                    </div>
                    <h4 className="h4 mb-4">{item.title}</h4>
                    <p className="body-2 text-n-4">{item.text}</p>
                  </div>
                </div>
              </div>
            );
          })}
          <Gradient />
        </div>
        <div className="flex justify-center mt-12 md:mt-15 xl:mt-20">
          <Button href="/roadmap">Our RoadMap</Button>
        </div>
      </div>
    </Section>
  );
};

export default Roadmap;
