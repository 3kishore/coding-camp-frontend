function CourseTimingComponent() {
  return (
    <div className="text-[#fff]">
      <div className="text-2xl font-medium text-[#ed970b] pt-[8px] pb-[12px] flex justify-center items-center mt-[16px]">Session details <div className="text-[14px] mt-[4px] pl-[4px] pr-[2px] text-[#fff]">(Only on weekends)</div> :</div>
      <div className="flex flex-wrap justify-center gap-3">
        <div className="elementor-widget-wrap !mt-0">
          <span className="material-symbols-outlined text-orange">calendar_month</span> Dates: 16-Nov, 17-Nov, 23-Nov, 24-Nov, 30-Nov, 1-Dec
        </div>
        {/* <div className="elementor-widget-wrap">
          <span className="material-symbols-outlined text-orange">schedule</span> Saturday: 6:30PM - 9:30PM and Sunday 10:30PM - 01:30PM
        </div> */}
        <div className="elementor-widget-wrap">
          <span className="material-symbols-outlined text-orange !mt-0">extension</span> 100% Practical couching
        </div>
      </div>
      <div className="text-2xl font-medium text-[#fff] pt-[8px] pb-[12px]">
        Classes will be held over
        <span className="text-[#ed970b]">&nbsp;4 days, 3 hours per day, for a total of 12 hours</span>.
        They will take place only on <span className="text-[#ed970b]"> &nbsp;Saturdays and Sundays</span>.
      </div>
    </div>
  )
}

export default CourseTimingComponent;
