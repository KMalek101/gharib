import InputChat from "./InputChat";
import ChatHeader from "./ChatHeader";
import { useKhatmasContent } from "@/context/KhatmasContentContext";

export default function ChatContent({ nameHeader }) {
    const {name , tm , p , re, per} = useKhatmasContent();

    console.log(name);
    return<>
        <div class=" flex flex-col relative bg-[var(--dark-color)] w-full h-[var(--height)]">
            <ChatHeader Name={ nameHeader } />
            <div class="grow"></div>
            <div class="flex flex-row items-center justify-between pl-4 pr-4">
                <InputChat />
            </div>
        </div>
    </>
}