function CourseTimingComponent() {
  return (
    <div className="text-[#fff]">
      <div className="text-2xl font-medium text-[#fff] pt-[8px] pb-[12px]">
        Classes will be held over
        <span className="text-[#ed970b]">&nbsp;4 days, 3 hours per day, for a total of 12 hours</span>.
        They will take place only on <span className="text-[#ed970b]"> &nbsp;Saturdays and Sundays</span>.
      </div>

      <div className="text-2xl font-medium text-[#ed970b] pt-[8px] pb-[12px] flex justify-center">Session details:</div>
      <div className="flex justify-center">
        <div className="elementor-widget-wrap">
          <span className="material-symbols-outlined text-orange">calendar_month</span> Dates: 7-Sept, 8-Sept, 14-Spet and 15-Sept
        </div>
        <div className="elementor-widget-wrap">
          <span className="material-symbols-outlined text-orange">schedule</span> Saturday: 6:30PM - 9:30PM and Sunday 10:30PM - 01:30PM
        </div>
        <div className="elementor-widget-wrap">
          <span className="material-symbols-outlined text-orange">extension</span> 100% Practical couching
        </div>
      </div>
    </div>
  )
}

export default CourseTimingComponent;
