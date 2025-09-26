export function Friend({ list, onSplitBillActive }) {
  return (
    <div className="items-center p-5 rounded-md flex flex-row mx-5 justify-between bg-gray-400/5 shadow-xs border border-gray-300/30">
      <div className="flex flex-col gap-1">
        <h1>{list.name}</h1>
        {list.balance > 0 && (
          <h1 className="text-green-500">
            {list.name} owes you ${list.balance}$
          </h1>
        )}
        {list.balance < 0 && (
          <h1 className="text-red-500">
            You owe {list.name} ${Math.abs(list.balance)}
          </h1>
        )}
        {list.balance === 0 && (
          <h1 className="text-black/50">
            {list.name} owes you nothing and you don't owe them anything either
          </h1>
        )}
      </div>
      <div>
        <button
          onClick={onSplitBillActive}
          className="p-2 px-4 rounded-xl cursor-pointer bg-gradient-to-r from-purple-600 to-indigo-600 text-white"
        >
          Select
        </button>
      </div>
    </div>
  );
}
