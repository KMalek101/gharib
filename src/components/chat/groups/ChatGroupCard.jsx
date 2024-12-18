import Image from "next/image"

export default function ChatGroupCard({ Name, handleClick, backgroundColor, index }) {

    return(
        <div onClick={ ()=>handleClick(Name, index) } class={`h-12 flex p-4 pb-10 pt-10 items-center gap-4 cursor-pointer bg-[var(--background-color)] hover:bg-[var(--main-color-hover)] `} style={{"--background-color" : `${backgroundColor}`}} >
            <Image src={"/electron.svg"} class="w-12 h-12 cursor-pointer" width={1} height={1} alt="accountImage" />
            <h2 class="text-[var(--w-color)] text-xl cursor-pointer"> {Name} </h2>
        </div>
    )

}