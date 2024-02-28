import Card from "../ReusableComponent/Card";
import Form from "../ReusableComponent/Form";
import SideBar from "../ReusableComponent/sidebar";

export default function CreateNote(){
    return(<>
    <div className="h-screen flex bg-blanc-casse">
        <SideBar/>
        <div className="flex w-full">
        <div className="w-[700px] shadow-md scroll overflow-auto p-2 gap-2 flex flex-col ">
            <Card title="card1" body="loremjsdfjsdhfsdfsdhfsdhfsdhf" createdAt="12/02/24" className="min-h-[10rem]"></Card>
            <Card title="card1" body="loremjsdfjsdhfsdfsdhfsdhfsdhf" createdAt="12/02/24" className="min-h-[10rem]"></Card>
            <Card title="card1" body="loremjsdfjsdhfsdfsdhfsdhfsdhf" createdAt="12/02/24" className="min-h-[10rem]"></Card>
            <Card title="card1" body="loremjsdfjsdhfsdfsdhfsdhfsdhf" createdAt="12/02/24" className="min-h-[10rem]"></Card>
            <Card title="card1" body="loremjsdfjsdhfsdfsdhfsdhfsdhf" createdAt="12/02/24" className="min-h-[10rem]"></Card>
            <Card title="card1" body="loremjsdfjsdhfsdfsdhfsdhfsdhf" createdAt="12/02/24" className="min-h-[10rem]"></Card>
            <Card title="card1" body="loremjsdfjsdhfsdfsdhfsdhfsdhf" createdAt="12/02/24" className="min-h-[10rem]"></Card>
            <Card title="card1" body="loremjsdfjsdhfsdfsdhfsdhfsdhf" createdAt="12/02/24" className="min-h-[10rem]"></Card>
            <Card title="card1" body="loremjsdfjsdhfsdfsdhfsdhfsdhf" createdAt="12/02/24" className="min-h-[10rem]"></Card>
            <Card title="card1" body="loremjsdfjsdhfsdfsdhfsdhfsdhf" createdAt="12/02/24" className="min-h-[10rem]"></Card>
            <Card title="card1" body="loremjsdfjsdhfsdfsdhfsdhfsdhf" createdAt="12/02/24" className="min-h-[10rem]"></Card>
            <Card title="card1" body="loremjsdfjsdhfsdfsdhfsdhfsdhf" createdAt="12/02/24" className="min-h-[10rem]"></Card>
            <Card title="card1" body="loremjsdfjsdhfsdfsdhfsdhfsdhf" createdAt="12/02/24" className="min-h-[10rem]"></Card>
            <Card title="card1" body="loremjsdfjsdhfsdfsdhfsdhfsdhf" createdAt="12/02/24" className="min-h-[10rem]"></Card>
            <Card title="card1" body="loremjsdfjsdhfsdfsdhfsdhfsdhf" createdAt="12/02/24" className="min-h-[10rem]"></Card>
            <Card title="card1" body="loremjsdfjsdhfsdfsdhfsdhfsdhf" createdAt="12/02/24" className="min-h-[10rem]"></Card>
            
            

        </div>
        
        <Form className="w-full m-8"/>
        </div>
    </div>
    </>)
} 