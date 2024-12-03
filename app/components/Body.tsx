import Pfp from "./Pfp";
import Intro from "./Intro";
import Location from "./Location";
import Education from "./Education";
import Experience from "./Experience";
import Hobbies from "./Hobbies";
import Socials from "./Socials";

function Body() {
  return (
    <div className="p-2 flex flex-col lg:flex-row gap-2">
      <Pfp />
      <div className="flex flex-col gap-5 mx-5 py-2">
        <Intro />
        <Location />
        <Education />
        <Experience />
        <Hobbies />
        <Socials />
      </div>
    </div>
  );
}

export default Body;
