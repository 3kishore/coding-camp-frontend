function HeaderSection() {
  return (
    <div className="flex flex-wrap justify-center">
      <img src={'./tutorial-app-logo.svg'} alt="Logo" className="h-[200px] w-[232px]" />
      <div className="flex flex-col gap-3 justify-center items-center text-2xl font-medium text-[#FFD700]">
        <div>Join us to learn coding in</div>
        <div className="text-[#ed970b]">"TAMIL"</div>
      </div>
    </div>
  )
}

export default HeaderSection;
