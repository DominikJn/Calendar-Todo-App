import React from "react";
//utils
import getDataFromLocalStorage from "../../utils/local-storage/getDataFromLocalStorage";
import toLocalISOString from "../../utils/toLocalISOString";
import getTimeFromDate from "../../utils/getTimefFromDate";
//context
import { useAppContext } from "../../context/AppContextProvider";
//types
import { UserData } from "../../types/UserData";
//tanstack query
import { useQueryClient, useMutation } from "@tanstack/react-query";
//axios
import axios from "axios";
//react hook form
import { useForm } from "react-hook-form";
//components
import Form from "../forms/Form";
import Input from "../forms/Input";
import TextArea from "../forms/TextArea";
import SubmitInput from "../forms/SubmitInput";
import ErrorMessage from "../ErrorMessage";

interface TaskCreationFormData {
  title: string;
  description: string;
  date: Date | string;
  time: string;
}

const TaskCreationForm: React.FC = () => {
  const userData: UserData = getDataFromLocalStorage("userData");
  const { selectedDate, toggleModal } = useAppContext();
  const {
    register,
    handleSubmit,
    setError,
    setValue,
    reset,
    formState: { isLoading, errors },
  } = useForm<TaskCreationFormData>({
    defaultValues: {
      title: "",
      description: "",
      date: toLocalISOString(new Date()),
      time: getTimeFromDate(new Date()),
    },
  });

  setValue("date", toLocalISOString(selectedDate));

  const queryClient = useQueryClient();
  const AddTaskmutation = useMutation({
    mutationFn: async (data: TaskCreationFormData): Promise<void> => {
      try {
        const response = await axios.post("http://localhost:3001/createTask", {
          ...data,
          userId: userData.userId,
          taskId: createTaskId(),
          date: new Date(data.date).toString(),
        });
        console.log(response);
      } catch (err: any) {
        setError("root", {
          type: "custom",
          message: err,
        });
      }
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  });

  function createTaskId(): string {
    return (
      "task" + Date.now().toString(36) + Math.random().toString(36).substr(2)
    );
  }

  function onSubmit(data: TaskCreationFormData): void {
    if (data.title) {
      AddTaskmutation.mutateAsync(data);
      toggleModal();
      reset();
    } else {
      setError("root", {
        type: "custom",
        message: "Must write a title at least!",
      });
    }
  }

  return (
    <div className="">
      <Form handleSubmit={handleSubmit} onSubmit={onSubmit}>
        <Input
          type="text"
          label="title"
          register={register}
          required
          placeholder="Title..."
        />
        <TextArea
          label="description"
          register={register}
          placeholder="Description..."
        />
        <Input type="date" label="date" register={register} />
        <Input type="time" label="time" register={register} required />
        <SubmitInput isLoading={isLoading} value="Create Task" />
        <ErrorMessage errors={errors} />
      </Form>
    </div>
  );
};

export default TaskCreationForm;
