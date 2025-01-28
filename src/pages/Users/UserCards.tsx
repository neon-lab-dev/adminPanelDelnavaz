type TCardData = {
  name: string;
  quantity: number;
};

export default function UserCards({cardData} : {cardData:TCardData[]}) {
  // const CardsData: CardData[] = [
  //   {
  //     name: "Total Users",
  //     quentity: 2485,
  //   },
  //   {
  //     name: "Active Users",
  //     quentity: 2284,
  //   },
  //   {
  //     name: "Approved Users",
  //     quentity: 2000,
  //   },
  //   {
  //     name: "Pending Users",
  //     quentity: 485,
  //   },
  // ];

  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
      {cardData.map((item, idx) => (
        <div
          key={idx}
          className="w-full bg-white rounded-lg shadow p-5 flex flex-col gap-4"
        >
          <h3 className="font-normal text-[16px]">{item.name}</h3>
          <h1 className="font-semibold text-2xl">{item.quantity}</h1>
        </div>
      ))}
    </div>
  );
}
