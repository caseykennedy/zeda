export type FeatureShape = {
  icon: JSX.Element
  title: string
  desc: string
}

const FeatureGridItem = ({ icon, title, desc }: FeatureShape): JSX.Element => {
  return (
    <div className="group col-span-4 border-l border-silver-800 pl-5 sm:col-span-2 lg:col-span-1">
      <div className="mb-16 mt-4 translate-y-0 transition-all group-hover:-translate-y-4 group-hover:text-violet-500 [&>svg]:h-8 [&>svg]:w-8">
        {icon}
      </div>
      <h4 className="mb-8 font-display text-3xl font-semibold">{title}</h4>
      <p className="text-lg dark:text-white">{desc}</p>
    </div>
  )
}

export default FeatureGridItem
