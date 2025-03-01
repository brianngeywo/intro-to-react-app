import { newToDo } from "@/utils/form-actions"

const NewToDoForm = () => {
 return (
    <div className="border-grey p-6 m-6">
        <form action={newToDo} className="">
            <input name="title" type="text" className="text-black bg-white p-4 rounded-md"/>
            <button type="submit" className="mx-4 bg-sky-900 p-4 rounded-md">submit title</button>
        </form>
    </div>
 )
}

export default NewToDoForm