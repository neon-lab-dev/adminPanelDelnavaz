type CardData = {
  name: string;
  quentity: number;
};

export default function RecordingsCards() {
  const CardsData: CardData[] = [
    {
      name: "Total Recordings",
      quentity: 2485,
    },
    {
      name: "Live Recordings",
      quentity: 2284,
    },
    {
      name: "Draft Recordings",
      quentity: 2000,
    },
    {
      name: "Deleted Recordings",
      quentity: 485,
    },
  ];
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {CardsData.map((item, idx) => (
        <div
          key={idx}
          className="w-full bg-white rounded-lg shadow p-5 flex flex-col gap-4"
        >
          <h3 className="font-normal text-[16px]">{item.name}</h3>
          <h1 className="font-semibold text-2xl">{item.quentity}</h1>
        </div>
      ))}
    </div>
  );
}
