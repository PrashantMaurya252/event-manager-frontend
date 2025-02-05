import { Icon } from "@iconify/react"


const EventCard = () => {
  return (
    <div className="w-full h-[300px] rounded-lg border-[2px] border-blue-600 shadow-xl shadow-blue-500">
        <img src="/images/auth-page.jpg" className="w-full h-[55%] object-cover rounded-t-lg"/>
        <h1 className="font-semibold text-lg pl-2">Title</h1>
        <div className="w-full flex flex-col mt-1 px-2 gap-2">
            <span className="bg-green-500 text-white px-1 rounded-md w-fit text-sm">Free</span>
            <div className="flex w-full justify-between items-center">
            <span className="font-semibold">Spritual</span>
            <div className="flex justify-center items-center gap-1">
                <span><Icon icon="ion:people-sharp" className="w-[24px] h-[24px]" /></span>
                <span>2 People</span>
            </div>
            </div>
        <button className="w-full bg-green-500 text-white font-semibold rounded-sm cursor-pointer">Join</button>
        </div>
    </div>
  )
}

export default EventCard