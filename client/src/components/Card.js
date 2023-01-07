import { Button } from "@material-tailwind/react";

export default function Card() {
    return (
        <div className='h-80 w-72 bg-slate-100 backdrop-blur-md backdrop-brightness-50 flex justify-evenly items-center flex-col mx-auto rounded-2xl'>
            <div className="h-36 w-max flex flex-col justify-center items-center gap-5">
                <div className="text-white font-extrabold text-4xl">M3</div>
                <div className="text-white font-extrabold text-xl">Mid Term Paper</div>
                <div className="text-white font-extrabold text-lg">2020</div>
            </div>
            <div className="flex gap-x-10">
                <Button variant='gradient' className='w-30'>Downlaod</Button>
                <Button variant='outlined' className='w-30'>View</Button>
            </div>
        </div>

    );
}
