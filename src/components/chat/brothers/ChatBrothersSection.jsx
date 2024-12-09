import { useState } from "react";
import ChatBrotherCard from "./ChatBrotherCard"
import { useNameHeader } from "@/context/NameHeaderContext";
import { useRouter } from "next/navigation";

export default function ChatBrotherSection() {
    const ARRAY_LENGTH = 5;
    const BACKGROUND_COLOR = "#212121"
    const BACKGROUND_COLOR_NEW = "#323232"
    const BROTHER_ID = "123asd"
    const brothersDataArray = ["Malek", "Moh", "Zohir", "Walid", "Moussa"];
    const [backgroundColorArray, setBackgroundColorArray] = useState(Array(ARRAY_LENGTH).fill(BACKGROUND_COLOR));

    const { changeNameHeader } = useNameHeader();
    const router = useRouter();

    const handleClick = (brother, i) => {

        setBackgroundColorArray(prevBackgroundColor => 
            prevBackgroundColor.map((element, index) => 
                (index === i ? `${BACKGROUND_COLOR_NEW}` : `${BACKGROUND_COLOR}`)
            )
        )

        changeNameHeader(brother);
        router.push(`/chat/brothers/${brother}`)

    }

    return(
        <div >
            {brothersDataArray.map( (brother, index) => (
                <ChatBrotherCard backgroundColor={backgroundColorArray[index]} key={index} handleClick={handleClick} Name={brother} index={index} />
            ) )}
        </div>
    )
}