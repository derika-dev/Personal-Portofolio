type SkillBoxProps = {
  name: string
  icon: React.ReactNode
  borderColor: string
}

export const SkillBox = ({ name, icon, borderColor }: SkillBoxProps) => (
  <div className={`flex flex-wrap justify-center gap-6 border ${borderColor} rounded-xl px-8 py-6 text-center bg-zinc-900 text-white`}>
    <div className="flex justify-center mb-2">{icon}</div>
    <p className="font-semibold">{name}</p>
  </div>
)
