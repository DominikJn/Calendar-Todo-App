import React from "react";
//axios
import axios from "axios";
//components
import Form from "../forms/Form";
import Input from "../forms/Input";
import TextArea from "../forms/TextArea";
import SubmitInput from "../forms/SubmitInput";
import ErrorMessage from "../ErrorMessage";
//tanstack query
import { useMutation, useQueryClient } from "@tanstack/react-query";
//react hook form
import { useForm } from "react-hook-form";
//context
import { useAppContext } from "../../context/AppContextProvider";
//types
import { Task } from "../../types/Task";

interface TaskEditionFormProps {
  task: Task;
}

interface TaskEditionFormData {
  title: string;
  description: string;
  time: string;
}

const TaskEditionForm: React.FC<TaskEditionFormProps> = ({ task }) => {
  const { toggleModal } = useAppContext();
  const queryClient = useQueryClient();
  const EditTaskMutation = useMutation({
    mutationFn: async (data: TaskEditionFormData): Promise<void> => {
      try {
        const response = await axios.put(
          `http://localhost:3001/editTask/${task.taskId}`,
          data
        );
        console.log(response.data)
      } catch (err: any) {
        setError("root", {
          type: "custom",
          message: err,
        });
      }
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  });

  const {
    register,
    handleSubmit,
    setError,
    reset,
    formState: { isLoading, errors },
  } = useForm<TaskEditionFormData>({
    defaultValues: {
      title: task.title,
      description: task.description,
      time: task.time,
    },
  });

  function onSubmit(data: TaskEditionFormData): void {
    if (data.title) {
      EditTaskMutation.mutateAsync(data);
      toggleModal();
      reset();
    } else {
      setError("root", { type: "custom", message: "Title cannot be empty!" });
    }
  }
  
  return (
    <div>
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
        <Input type="time" label="time" register={register} required />
        <SubmitInput isLoading={isLoading} value="Edit Task" />
        <ErrorMessage errors={errors} />
      </Form>
    </div>
  );
};

export default TaskEditionForm;
