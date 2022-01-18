import Card from "./components/Card";
import {
  ExerciseIcon,
  PlayIcon,
  SelfCareIcon,
  SocialIcon,
  StudyIcon,
  WorkIcon,
} from "./components/icons";
import Menu from "./components/Menu";

function App() {

  return (
    <div className="w-full min-h-screen bg-very-dark-blue py-8 px-4 flex items-center justify-center font-rubik text-white">
      <div className="w-full max-w-[1000px]">
        <div className="grid grid-cols-1 grid-rows-7 gap-6 md:grid-cols-3 lg:grid-cols-4 md:grid-rows-3 lg:grid-rows-2">
          {/* Side Bar */}
          <div className="rounded-xl overflow-hidden w-full pt-[60%] md:pt-[100%] relative lg:row-span-2 md:row-span-3">
            <div className="absolute top-0 left-0 w-full h-full bg-dark-blue">
              <div className="grid grid-rows-6 h-full">
                {/* User Section */}
                <div className="bg-blue row-span-4 rounded-b-xl p-6 sm:block flex items-center">
                  <img
                    src="images/image-jeremy.png"
                    alt="user profile photo"
                    className="w-16 border-2 border-white rounded-full mb-6"
                  />
                  <div className="ml-4 md:m-0">
                    <p className="text-sm text-pale-blue mb-1">Report for</p>
                    <h1 className="font-light text-4xl hidden sm:block">
                      Jeremy <br /> Robson
                    </h1>
                    <h1 className="font-light text-xl block sm:hidden">
                      Jeremy Robson
                    </h1>
                  </div>
                </div>
                {/* Menu */}
                <Menu />
              </div>
            </div>
          </div>

          {/* Card */}
          <Card color="bg-work" title="Work" icon={<WorkIcon />} />
          <Card color="bg-play" title="Play" icon={<PlayIcon />} />
          <Card color="bg-study" title="Study" icon={<StudyIcon />} />
          <Card color="bg-exercise" title="Exercise" icon={<ExerciseIcon />} />
          <Card color="bg-social" title="Social" icon={<SocialIcon />} />
          <Card color="bg-self-care" title="Self Care" icon={<SelfCareIcon />} />
        </div>
      </div>
    </div>
  );
}

export default App;
