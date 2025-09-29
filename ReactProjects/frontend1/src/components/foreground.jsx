import Card from "./cards";


const Foreground = () => {
    const cardData = [
        {
            title: "Download Now",
            description: "Lorem ipsum dolor sit amet consectetur adipisicing.",
            size: "0.4mb",
        },
        {
            title: "Get File",
            description: "This is another test description for the card.",
            size: "1.2mb",
        },
        {
            title: "Save Report",
            description: "Report file ready for download.",
            size: "2.5mb",
        },
    ];

    return (
        <div className="fixed z-[3] top-0 left-0 w-full h-screen flex gap-4 p-2">
            {cardData.map((item, index) => (
                <Card key={index} data={item} />
            ))}
        </div>
    );
};

export default Foreground;
