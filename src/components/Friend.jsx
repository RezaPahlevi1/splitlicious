export function Friend({ list }) {
  return (
    <div className="p-5 rounded-md flex flex-row mx-5 justify-between bg-gray-400/5 shadow-xs border border-gray-300/30">
      <div className="flex flex-col gap-1">
        <h1>{list.name}</h1>
        <h1>
          {list.balance > 0
            ? `${list.name} owes you ${list.balance}$`
            : `You owe ${list.name} ${Math.abs(list.balance)}$`}
        </h1>
      </div>
      <div>
        <button className="p-3 bg-blue-100 cursor-pointer">Select</button>
      </div>
    </div>
  );
}
