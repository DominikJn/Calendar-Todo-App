import React from "react";
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
//utils
import api from "../../utils/api";
//types 
import { Task } from "../../types/Task";

interface TaskEditionFormProps {
  task: Task;
}

interface TaskEditionFormData {
  title: string;
  description: string | undefined;
  time: string;
}

const TaskEditionForm: React.FC<TaskEditionFormProps> = ({ task }) => {
  const { toggleModal } = useAppContext();
  const {
    register,
    handleSubmit,
    setError,
    reset,
    setValue,
    formState: { isLoading, errors },
  } = useForm<TaskEditionFormData>({
    defaultValues: {
      title: task.title,
      description: task.description,
      time: task.time,
    }
  });
  const queryClient = useQueryClient();
  const EditTaskMutation = useMutation({
    mutationFn: async (data: TaskEditionFormData): Promise<void> => {
      try {
        const response = await api.put(`tasks/edit/${task._id}`, data);
        setValue('title', data.title)
        setValue('description', data.description)
        setValue('time', data.time)
        console.log(response.data);
      } catch (err: any) {
        setError("root", {
          type: "custom",
          message: err,
        });
      }
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
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
