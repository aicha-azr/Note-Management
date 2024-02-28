import Form from "@/app/ReusableComponent/Form";

export default function CreateNote() {
    return (
        <>
            <div className="flex p-1 h-screen gap-2">
                <div className="bg-blue-500 w-[20rem]">sideBar</div>
                <div className="flex-grow">
                    <h1 className="text-center text-2xl p-2">Create a note</h1>
                    <Form className="w-full" />
                </div>
            </div>
        </>
    );
}
