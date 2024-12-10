import ChatKhatmaCard from "./ChatKhatmaCard";
import { useKhatmasContent } from "@/context/KhatmasContentContext"; 
export default function ChatKhatmasSection() {
    const { updateKhatmasContent } = useKhatmasContent();
    console.log("The value of it is : ". updateKhatmasContent);
    
    const data = [
        { name: "Ghaza", percentage: 75, timeLeft: "3h 45m", status: "In Progress", personalProgress: 50 },
        { name: "Gharib", percentage: 40, timeLeft: "6h 20m", status: "Pending", personalProgress: 20 },
        { name: "Tuesday", percentage: 90, timeLeft: "30m", status: "Almost Done", personalProgress: 85 },
        { name: "Jumu'ah", percentage: 65, timeLeft: "1h 15m", status: "In Progress", personalProgress: 60 },
        { name: "Istighfar", percentage: 50, timeLeft: "2h 50m", status: "Active", personalProgress: 45 }
    ];

    const handleCardClick = (khatma) => {
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
            {data.map((element) => (
                <div 
                    key={element.name} 
                    onClick={() => handleCardClick(element)}  
                    className="cursor-pointer"  
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