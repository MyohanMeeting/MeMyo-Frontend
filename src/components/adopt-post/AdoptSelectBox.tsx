interface AdoptSelectBoxProps {
  id: number;
  label: string;
  options: string[];
  selectedValue: string;
}

function AdoptSelectBox({ id, label, options, selectedValue }: AdoptSelectBoxProps) {
  console.log('id', id);
  console.log('selected', selectedValue);
  return (
    <button type="button" disabled className="relative w-full   mb-52">
      <div className="relative w-full flex items-center justify-between border-2 border-memyo-yellow4 rounded-md px-2 py-1 ">
        {label}
        {/* svg 는 컴포넌트로 쉽게 쓸 수 있게끔 변경예정  */}
        <svg viewBox="0 0 512 512" width="1rem" height="1rem">
          <path
            fill="none"
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="48"
            d="M112 184l144 144 144-144"
          />
        </svg>
      </div>
      <ul
        className="absolute block left-0 right-0 top-full  max-h-36 overflow-y-auto transition-all py-2 bg-slate-100 rounded-lg text-center shadow-md  "
        // webkit scroll bar : none -- tailwind 는 따로 패키지를 다운받아야함.
        // 해당 ul tag top:calc(100% + 0.5rem) 은 어떻게 적용을 해줘야할까?
      >
        {options?.map((option: string) => (
          <li
            className="relative w-full flex items-center justify-center p-3 transition-all cursor-pointer hover:bg-memyo-yellow1 hover:bg-opacity-50  "
            // tailwind rgba 적용 방법?
          >
            <svg
              viewBox="0 0 16 16 "
              width="1rem"
              height="1rem"
              className="absolute left-4 "
              // 해당 부분 Checkbox SVG hidden은 css 처리로 작업하기에 너무 깊어져서 상태를 이용해 해결 예정
            >
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z" />
            </svg>

            <span>{option}</span>
          </li>
        ))}
      </ul>
    </button>
  );
}

export default AdoptSelectBox;
