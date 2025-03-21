import { PackageOpen } from "lucide-react";

function Card() {
  const cardList = [
    {
      title: "Orders",
      value: "142,293",
      logo: <PackageOpen size={20} />,
      rowspan: "",
      minh: "min-h-[150px]",
    },
    {
      title: "Monthly Deals",
      value: "2,235",
      logo: <PackageOpen size={20} />,
      rowspan: "row-span-2",
      minh: "min-h-[300px]",
    },
    {
      title: "New Orders",
      value: "42,495",
      logo: <PackageOpen size={20} />,
      rowspan: "",
      minh: "min-h-[150px]",
    },
    {
      title: "Total Orders",
      value: "$24,875",
      logo: <PackageOpen size={20} />,
      rowspan: "",
      minh: "min-h-[150px]",
    },
    {
      title: "Total Revenue",
      value: "$52,128",
      logo: <PackageOpen size={20} />,
      rowspan: "",
      minh: "min-h-[150px]",
    },
    {
      title: "Conversion Rate",
      value: "56%",
      logo: <PackageOpen size={20} />,
      rowspan: "",
      minh: "min-h-[150px]",
    },
    {
      title: "Bounce Rate",
      value: "23%",
      logo: <PackageOpen size={20} />,
      rowspan: "",
      minh: "min-h-[150px]",
    },
    {
      title: "Views",
      value: "101,321",
      logo: <PackageOpen size={20} />,
      rowspan: "",
      minh: "min-h-[150px]",
    },
  ];

  return (
    <>
      {cardList.map((card, index) => (
        <div
          key={index}
          className={`border border-[rgba(255,255,255,0.3)] rounded-lg ${card.minh} ${card.rowspan}`}
        >
          <div className="flex">
            <div className="pl-10 pt-10 text-white text-xl font-normal">
              {card.title}
            </div>
            <div className="pl-2 pt-11 text-white">{card.logo}</div>
          </div>

          <div className="pl-10 text-white text-2xl font-semibold">
            {card.value}
          </div>
        </div>
      ))}
    </>
  );
}
export default Card;
