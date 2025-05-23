import { FaPhp, FaLaravel, FaReact, FaFigma, FaNodeJs, FaCss3Alt, FaHtml5, FaDatabase, FaDrawPolygon  } from "react-icons/fa";
import { SiDart, SiFlutter } from "react-icons/si";
import { SkillBox } from "./ui/skillbox";

const SkillSection = () => {
  return (
    <section className="bg-black py-20 px-4 text-white">
      <div className="max-w-5xl mx-auto space-y-16">

        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
            <span className="bg-gradient-to-r from-blue-400 to-purple-500 text-transparent bg-clip-text">Skills</span>
        </h2>

        {/* Bahasa Pemrograman yang Dipahami */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">Web Development</h2>
          <div className="flex flex-wrap justify-center gap-6">

            <SkillBox name="JavaScript (React, Node.js)" icon={<FaReact size={40} color="#61DBFB" />} borderColor="border-cyan-400" />
            <SkillBox name="Node.js" icon={<FaNodeJs size={40} color="#3C873A" />} borderColor="border-green-500" />
            <SkillBox name="PHP" icon={<FaPhp size={40} color="#8892be" />} borderColor="border-purple-400" />
            <SkillBox name="Laravel" icon={<FaLaravel size={40} color="#f9322c" />} borderColor="border-red-500" />
            <SkillBox name="HTML" icon={<FaHtml5 size={40} color="#E44D26" />} borderColor="border-orange-500" />
            <SkillBox name="CSS" icon={<FaCss3Alt size={40} color="#264DE4" />} borderColor="border-blue-500" />

          </div>
        </div>

        {/* UI/UX & Desain */}
        <div>
          <h2 className="text-2xl font-bold mb-6 text-center">UI/UX & Desain</h2>
          <div className="flex justify-center  gap-6">
            <SkillBox name="Figma" icon={<FaFigma size={40} color="#f24e1e" />} borderColor="border-pink-400" />
            <SkillBox name="CorelDRAW" icon={<FaDrawPolygon size={40} color="#00B900" />} borderColor="border-green-400" />
          </div>
        </div>

      </div>
    </section>
  )
}

export default SkillSection;
