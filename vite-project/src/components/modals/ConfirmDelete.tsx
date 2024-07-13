import React from "react";
//tanstack query
import { useMutation, useQueryClient } from "@tanstack/react-query";
//context
import { useAppContext } from "../../context/AppContextProvider";
//utils
import api from "../../utils/api";
//toastify
import { toast } from "react-toastify";

interface ConfirmDeleteProps {
  taskId: string;
}

const ConfirmDelete: React.FC<ConfirmDeleteProps> = ({ taskId }) => {
  const { toggleModal } = useAppContext();
  const queryClient = useQueryClient();
  const deleteMutation = useMutation({
    mutationFn: async () => {
      await api.delete(`tasks/delete/${taskId}`);
    },
    onSuccess: () => queryClient.invalidateQueries({ queryKey: ["tasks"] }),
  });

  async function handleDelete(): Promise<void> {
    await deleteMutation.mutateAsync();
    toast.success('Task successfuly deleted!')
    toggleModal();
  }
  return (
    <div>
      <h2 className="text-3xl">Are You sure You want to delete this task?</h2>
      <button
        className="
          py-3 px-6 mt-2 text-2xl w-full
          border-solid border rounded-2xl
          bg-red-600 hover:bg-red-500 active:bg-red-600 
          text-white
        "
        onClick={handleDelete}
      >
        Delete
      </button>
    </div>
  );
};

export default ConfirmDelete;
