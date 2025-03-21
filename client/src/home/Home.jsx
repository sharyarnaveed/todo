import axios from "axios";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
const home = () => {
  const [todos, setTodos] = useState([]);
  const {
    resetField,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();



  const onSubmit = async (data) => {
    const sendTodo = {
      text: "",
      status: false,
    };
    sendTodo.text = data.task;
    try {
      const responce = await axios.post(
        "http://localhost:8080/todo/",
        sendTodo
      );
      console.log(responce.data);
      resetField("task")

      await gettodos();
    } catch (error) {
      console.log("error in saving todo", error);
    }
  };

  const gettodos = async () => {
    try {
      const response = await axios.get("http://localhost:8080/todo/");
      console.log(response.data);
      setTodos(response.data);
    } catch (error) {
      console.log(error);
    }
  };

  const deletetodo = async (id) => {
    try {
      const responce = await axios.delete(`http://localhost:8080/todo/${id}`);
      console.log(responce.data);
      await gettodos();
    } catch (error) {
      console.log("error in deleting todo", error);
    }
  };

  const updatetask = async (id, currentstate) => {
    try {
      const currentStateBoolean = currentstate === "true" || currentstate === true;

      const responce = await axios.put(`http://localhost:8080/todo/${id}`, {
        status: !currentStateBoolean,
      });
      console.log(responce.data);
      gettodos();
    }

    catch (error) {
      console.log("error in updating todo", error);
    }
  };

  useEffect(() => {
    gettodos();
  }, []);

  return (
    <>
      <main className=" h-[100vh] ">
        <div className=" h-[95vh] overflow-y-auto">
          <div className=" h-[15%] flex justify-center items-center text-[3rem]">
            <h1>TODO TASK</h1>
          </div>
          <div className=" h-[85%] flex flex-col justify-center items-center">
            <form
              className="h-14 w-full mt-4 flex justify-center items-center gap-4"
              onSubmit={handleSubmit(onSubmit)}
            >
              <input
                type="text"
                {...register("task")}
                placeholder="Add new task..."
                className="w-[40%] h-[70%] text-[1.2rem] p-3 rounded-lg border-2 border-purple-300 focus:border-purple-500 focus:outline-none transition-colors"
              />
              <input
                type="submit"
                value="Add Task"
                className="h-[70%] px-6 rounded-lg bg-purple-600 text-white hover:bg-purple-700 transition-colors cursor-pointer text-[1.1rem]"
              />
            </form>

            <div className=" mt-4 h-full w-full p-6 bg-purple-50 rounded-lg">
              <div className="space-y-4">
                {todos.map((todo) => (
                  <div
                    key={todo.id}
                    className={`p-4 rounded-lg shadow-sm flex justify-between items-center ${todo.status == "true" ? "bg-purple-200" : "bg-white"
                      }`}
                  >
                    <span
                      className={`${todo.status == "true"
                          ? "line-through text-purple-500"
                          : "text-gray-800"
                        }`}
                    >
                      {todo.text}
                    </span>
                    <div className="flex space-x-2">
                      <button
                        onClick={() => updatetask(todo.id, todo.status)}
                        className={`px-3 py-1 rounded-md ${todo.status == "true"
                            ? "bg-purple-200 text-purple-700 hover:bg-purple-300"
                            : "bg-purple-600 text-white hover:bg-purple-700"
                          } transition-colors`}
                      >
                        {todo.status ? "Undo" : "Complete"}
                      </button>

                      <button
                        onClick={() => deletetodo(todo.id)}
                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

      </main>
    </>
  );
};

export default home;
