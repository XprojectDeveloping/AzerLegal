import MaxWidth from "@/app/(components)/shared_components/MaxWidth";

const OurGoal = ({ data }) => {
  const dataCard = [
    {
      id: 1,
      title: data?.blue_card_top_text1,
      text: data?.blue_card2_editor,
    },
    {
      id: 2,
      title: data?.blue_card_top_text2,
      text: data?.blue_card3_editor,
    },
    {
      id: 3,
      title: data?.blue_card_top_text3,
      text: data?.blue_card4_editor,
    },
    {
      id: 4,
      title: data?.blue_card_top_text4,
      text: data?.blue_card4_editor,
    },
  ];
  return (
    <section className="py-[8rem] bg-[#F4F6F6]">
      <MaxWidth>
        <div
          className="text-[3.6rem] text-[#011E41] font-[700] text-center mb-[4rem]"
          dangerouslySetInnerHTML={{ __html: data?.card1_title }}
        />

        <div className="grid grid-cols-12 gap-[2.4rem]">
          {dataCard.map((item) => {
            return (
              <div
                key={item?.id}
                className="col-span-3 p-[2rem] rounded-[0.8rem] bg-[#011E41] text-center"
              >
                <p className="text-[#ffffff] text-[2.4rem] font-[600] mb-[2rem]">
                  {item?.title}
                </p>
                <div
                  className="text-[1.4rem] text-[#ffffff] font-[200]"
                  dangerouslySetInnerHTML={{ __html: item?.text }}
                />
              </div>
            );
          })}
        </div>
      </MaxWidth>
    </section>
  );
};

export default OurGoal;
