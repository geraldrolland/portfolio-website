
import Introduction from "@/component/Introduction";
import PersonaImage from "@/component/PersonaImage";
import Skills from "@/component/Skills";
import myImage from "../public/my-image.jpg";

export default function HomePage() {
  return (
    <>
    <div className="w-full px-4 lg:px-0 flex justify-center flex-wrap gap-x-[100px] pt-[70px] items-center mt-[50px] gap-y-[100px]">
      <Introduction />
      <PersonaImage image={myImage} />
    </div>
    <Skills />
    </>

  );
}
