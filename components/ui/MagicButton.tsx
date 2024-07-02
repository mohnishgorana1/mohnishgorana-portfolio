

function MagicButton({ title, icon, position, handleClick, otherClasses, outerClass,textSize }: {
  title: string;
  icon?: React.ReactNode,
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
  outerClass?: string
  textSize?:string

}) {
  return (
    <button className={`${outerClass} relative inline-flex overflow-hidden rounded-lg p-[1px] focus:outline-none`}>
      <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
      <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-slate-950 sm:px-7 sm:py-4 px-5 py-2 text-sm sm:text-lg font-medium text-white backdrop-blur-3xl gap-2 ${otherClasses}`}>
        {position === "left" && icon}
        <p className={`${textSize}`}>{title}</p>
        {position === "right" && icon}
      </span>
    </button>
  )
}

export default MagicButton


