import ShareButtons from "app/components/common/ShareButtons";

export default function ShareSection(){
    return (<div className="sm:flex justify-between items-center border-y border-gray-300 py-3">
        <span className="mb-4 sm:mb-0 inline-block">Share post to</span>
        <ShareButtons />
    </div>)
}