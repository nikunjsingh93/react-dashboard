function Grid() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4 gap-4">
      <div className="bg-gray-400 rounded-lg min-h-[200px] "></div>
      <div className="bg-gray-500 rounded-lg min-h-[200px] row-span-2"></div>
      <div className="bg-gray-600 rounded-lg min-h-[200px] "></div>
      <div className="bg-gray-700 rounded-lg min-h-[200px] "></div>
      <div className="bg-gray-800 rounded-lg min-h-[200px] "></div>
      <div className="bg-gray-400 rounded-lg min-h-[200px] "></div>
      <div className="bg-gray-500 rounded-lg min-h-[200px] "></div>
    </div>
  );
}
export default Grid;
