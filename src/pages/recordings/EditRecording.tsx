/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import Cookies from "js-cookie";
import toast from "react-hot-toast";

type TFormValues = {
  name: string;
  description: string;
  category: string;
  bannerimage: FileList | null;
};

const EditRecording = ({ recording, setOpenModal }: { recording: any }) => {
  console.log(recording);
  // const categories = ["Music", "Podcast", "Tutorial", "Comedy"];

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<TFormValues>();

  // Populate default values from the props
  useEffect(() => {
    if (recording) {
      setValue("name", recording.name);
      setValue("description", recording.description);
      setValue("category", recording.category);
    }
  }, [recording, setValue]);

  const onSubmit = async (data: TFormValues) => {
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("category", data.category);

    // Append the banner image only if a new file is selected
    if (data.bannerimage && data.bannerimage[0]) {
      formData.append("bannerimage", data.bannerimage[0]);
    }
    const token = Cookies.get("authToken");

    try {
      const response = await axios.put(`https://podcast-backend-snowy.vercel.app/api/v1/podcast/${recording?._id}`, formData, 
        {
          headers: {
            Authorization: `Bearer ${token}`
          },
          withCredentials: true,
        }
      );
      if(response?.data?.status === 200){
        toast.success(response?.data?.message);
        setOpenModal(false);
        window.location.reload();
      }
    } catch (error) {
      console.error("Error updating recording:", error);
      alert("Failed to update recording.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col gap-6 mt-8"
    >
      {/* Name of the Recording */}
      <div className="w-full flex flex-col gap-2">
        <label className="text-[#424242]">Name of the Recording</label>
        <input
          type="text"
          {...register("name", {
            required: "Recording name is required",
          })}
          className="w-full rounded-md border border-[#C6C6C6] outline-0 px-3 p-2"
          placeholder="Name of the recording"
        />
        {errors.name && (
          <span className="text-red-500 text-sm">
            {errors.name.message}
          </span>
        )}
      </div>

      {/* Description */}
      <div className="w-full flex flex-col gap-2">
        <label className="text-[#424242]">Description</label>
        <textarea
          rows={5}
          {...register("description", {
            required: "Description is required",
          })}
          className="w-full rounded-md border border-[#C6C6C6] outline-0 px-3 p-2"
          placeholder="Description here"
        />
        {errors.description && (
          <span className="text-red-500 text-sm">
            {errors.description.message}
          </span>
        )}
      </div>

      {/* Category */}
      <div className="w-full flex flex-col gap-2">
        <label className="text-[#424242]">Category</label>
        <input
          type="text"
          {...register("category", {
            required: "Category is required",
          })}
          className="w-full rounded-md border border-[#C6C6C6] outline-0 px-3 p-2"
          placeholder="Enter the category"
        />
        {errors.category && (
          <span className="text-red-500 text-sm">
            {errors.category.message}
          </span>
        )}
      </div>

      {/* Banner Image */}
      <div className="w-full flex flex-col gap-2">
        <label className="text-[#424242]">Banner Image</label>
        <input
          type="file"
          accept="image/*"
          {...register("bannerimage")}
          className="w-full rounded-md border border-[#C6C6C6] outline-0 px-3 p-2"
        />
      </div>

      {/* Submit Button */}
      <div className="flex items-center justify-end gap-3">
        <button
          onClick={() => setOpenModal(false)}
          className="px-5 py-[10px] rounded-lg bg-[#F2F4F3] text-[#676767] text-lg font-medium leading-6 transition"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-5 py-[10px] rounded-lg bg-[#463730] text-white text-lg font-medium leading-6 hover:bg-[#121313] transition"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default EditRecording;
