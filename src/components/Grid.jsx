function Grid() {
  return (
    <div className="h-[calc(100vh-5rem)] overflow-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 gap-4">
      <div className=" border border-[rgba(255,255,255,0.3)] rounded-lg min-h-[150px] ">
        <div className="pl-10 pt-10 text-white text-xl font-normal">
        Orders
        </div>
        <div className="pl-10 text-white text-2xl font-semibold">
        142,293
        </div>
      </div>
      <div className=" border border-[rgba(255,255,255,0.3)] rounded-lg min-h-[300px] row-span-2">
        <div className="pl-10 pt-10 text-white text-xl font-normal">
        Monthly Deals
        </div>
        <div className="pl-10 text-white text-2xl font-semibold">
        2,234
        </div>
        <div className="pl-10 pt-25 text-white text-xl font-normal">
        Server Performance
        </div>
        <div className="pl-10 text-white text-2xl font-semibold">
        57%
        </div>
      </div>
      <div className=" border border-[rgba(255,255,255,0.3)] rounded-lg min-h-[150px] ">
        <div className="pl-10 pt-10 text-white text-xl font-normal">
        New Orders
        </div>
        <div className="pl-10 text-white text-2xl font-semibold">
        41,495
        </div>
      </div>
      <div className=" border border-[rgba(255,255,255,0.3)] rounded-lg min-h-[150px] ">
        <div className="pl-10 pt-10 text-white text-xl font-normal">
        Total Orders
        </div>
        <div className="pl-10 text-white text-2xl font-semibold">
        $24,879
        </div>
      </div>
      <div className=" border border-[rgba(255,255,255,0.3)] rounded-lg min-h-[150px] ">
        <div className="pl-10 pt-10 text-white text-xl font-normal">
        Total Revenue
        </div>
        <div className="pl-10 text-white text-2xl font-semibold">
        $52,127
        </div>
      </div>
      <div className=" border border-[rgba(255,255,255,0.3)] rounded-lg min-h-[150px] ">
        <div className="pl-10 pt-10 text-white text-xl font-normal">
        Total Revenue
        </div>
        <div className="pl-10 text-white text-2xl font-semibold">
        $52,127
        </div>
      </div>
      <div className=" border border-[rgba(255,255,255,0.3)] rounded-lg min-h-[150px] ">
        <div className="pl-10 pt-10 text-white text-xl font-normal">
        Conversion Rate
        </div>
        <div className="pl-10 text-white text-2xl font-semibold">
        56%
        </div>
      </div>
      <div className=" border border-[rgba(255,255,255,0.3)] rounded-lg min-h-[150px] ">
        <div className="pl-10 pt-10 text-white text-xl font-normal">
        Churn Rate
        </div>
        <div className="pl-10 text-white text-2xl font-semibold">
        23%
        </div>
      </div>
    </div>
    </div>
  );
}
export default Grid;
