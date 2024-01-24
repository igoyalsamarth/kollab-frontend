export default function LoadingPageAnimation() {
    return(
        <div className="flex w-full items-center justify-center h-[80vh] gap-4 duration-300">
            <div className="w-4 rounded-full aspect-square bg-neutral-300 animate-loader"></div>
            <div className="w-4 rounded-full aspect-square bg-neutral-500 animate-loader animation-delay-250"></div>
            <div className="w-4 rounded-full aspect-square bg-neutral-700 animate-loader animation-delay-500"></div>
            <div className="w-4 rounded-full aspect-square bg-neutral-900 animate-loader animation-delay-750"></div>
        </div>
    );
}