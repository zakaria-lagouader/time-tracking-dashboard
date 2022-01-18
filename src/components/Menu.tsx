import { useGetTimeframe, useSetTimeframe } from "../AppContext";

function Menu() {
  const timeframe = useGetTimeframe();
  const changeTimeframe = useSetTimeframe();

  return (
    <div className="p-6 row-span-2">
      <ul className="flex md:flex-col justify-between h-full">
        <li
          onClick={() => changeTimeframe("daily")}
          className={
            "cursor-pointer py-2 hover:text-white transition-al " +
            (timeframe === "daily" ? "text-white" : "text-desaturated-blue")
          }
        >
          Daily
        </li>
        <li
          onClick={() => changeTimeframe("weekly")}
          className={
            "cursor-pointer py-2 hover:text-white transition-al " +
            (timeframe === "weekly" ? "text-white" : "text-desaturated-blue")
          }
        >
          Weekly
        </li>
        <li
          onClick={() => changeTimeframe("monthly")}
          className={
            "cursor-pointer py-2 hover:text-white transition-al " +
            (timeframe === "monthly" ? "text-white" : "text-desaturated-blue")
          }
        >
          Monthly
        </li>
      </ul>
    </div>
  );
}

export default Menu;
