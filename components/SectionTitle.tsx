type Props = {
  children: React.ReactNode
}

const SectionTitle = ({ children }: Props) => (
  <div className="mb-8 border-b border-black pb-4 uppercase leading-3">
    {children}
  </div>
)

export default SectionTitle
