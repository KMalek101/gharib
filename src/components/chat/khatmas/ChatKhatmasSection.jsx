import ChatKhatmaCard from "./ChatKhatmaCard";
import { useKhatmasContent } from "@/context/KhatmasContentContext"; // Import the context

export default function ChatKhatmasSection() {
    const { updateKhatmasContent } = useKhatmasContent(); // Destructure the update function from context

    const data = [
        { name: "Ghaza", percentage: 75, timeLeft: "3h 45m", status: "In Progress", personalProgress: 50 },
        { name: "Gharib", percentage: 40, timeLeft: "6h 20m", status: "Pending", personalProgress: 20 },
        { name: "Tuesday", percentage: 90, timeLeft: "30m", status: "Almost Done", personalProgress: 85 },
        { name: "Jumu'ah", percentage: 65, timeLeft: "1h 15m", status: "In Progress", personalProgress: 60 },
        { name: "Istighfar", percentage: 50, timeLeft: "2h 50m", status: "Active", personalProgress: 45 }
    ];

    // Handle the click event
    const handleCardClick = (khatma) => {
        console.log(khatma)
        updateKhatmasContent({
            name: khatma.name,
            percentage: khatma.percentage,
            timeLeft: khatma.timeLeft,
            status: khatma.status,
            personalProgress: khatma.personalProgress
        });
    };

    return (
        <div>
            {data.map((element, index) => (
                <div 
                    key={index} 
                    onClick={() => handleCardClick(element)} // Click event calls the handler
                    className="cursor-pointer" // Makes the div look clickable
                >
                    <ChatKhatmaCard 
                        Name={element.name} 
                        Percentage={element.percentage} 
                    />
                </div>
            ))}
        </div>
    );
}
