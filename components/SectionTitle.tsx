type Props = {
  children: React.ReactNode
}

const SectionTitle = ({ children }: Props) => (
  <div className="mb-8 border-b border-black pb-4 uppercase leading-3 font-medium font-sans">
    {children}
  </div>
)

export default SectionTitle
