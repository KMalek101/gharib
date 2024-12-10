import { useKhatmasContent } from "@/context/KhatmasContentContext"; // Import context
import Circle from "../common/circle/Circle";

export default function KhatmasProgress() {
    const { name, percentage, timeLeft, status, personalProgress } = useKhatmasContent(); // Destructure context values

    return (
        <div className="flex flex-col justify-center items-center pb-6">
            {/* Dynamic Khatma Name */}
            <h1 className="text-4xl text-[var(--w-color)] flex justify-center pt-12">{name || "No Khatma Selected"}</h1>
            <h1 className="text-3xl text-[var(--w-color)] flex justify-center pt-12">Progress</h1>

            <div className="flex gap-24 pt-20">
                {/* Personal Progress */}
                <div className="flex flex-col justify-center items-center text-xl gap-6 text-[var(--w-color)]">
                    <Circle 
                        width={200} 
                        height={200} 
                        degree={personalProgress * 3.6} // Convert percentage to degrees (100% = 360 degrees)
                        fontSize={26} 
                        text={`${personalProgress || 0}%`} 
                        backgroundColor={"var(--secondary-color)"} 
                    />
                    Personal
                </div>

                {/* Group Progress */}
                <div className="flex flex-col justify-center items-center text-xl gap-6 text-[var(--w-color)]">
                    <Circle 
                        width={200} 
                        height={200} 
                        degree={percentage * 3.6} // Convert percentage to degrees (100% = 360 degrees)
                        fontSize={26} 
                        text={`${percentage || 0}%`} 
                        backgroundColor={"var(--secondary-color)"} 
                    />chat/brothers/Malek
                    Group
                </div>
            </div>

            <div>
                {/* Status */}
                <div className="flex gap-5 pt-14 text-xl">
                    <p className="text-[var(--w-color)]">Status:</p>
                    <p className="text-[var(--o-color)]">{status || "N/A"}</p>
                </div>

                {/* Time Left */}
                <div className="flex gap-5 pt-6 text-xl">
                    <p className="text-[var(--w-color)]">Time Left:</p>
                    <p className="text-[var(--r-color)]">{timeLeft || "N/A"}</p>
                </div>
            </div>
        </div>
    );
}
