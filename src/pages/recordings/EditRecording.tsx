import { useForm } from "react-hook-form";

type TFormValues = {
    recordingName: string;
    description: string;
    category: string;
    bannerImage: FileList;
  };

const EditRecording = () => {
    const categories = ["Music", "Podcast", "Tutorial", "Comedy"];
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<TFormValues>();
  
    const onSubmit = (data: TFormValues) => {
      const formData = new FormData();
  
      formData.append("recordingName", data.recordingName);
      formData.append("description", data.description);
      formData.append("category", data.category);
      formData.append("bannerImage", data.bannerImage[0]);
      console.log(formData.get("recordingName"));
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
          {...register("recordingName", {
            required: "Recording name is required",
          })}
          className="w-full rounded-md border border-[#C6C6C6] outline-0 px-3 p-2"
          placeholder="Name of the recording"
        />
        {errors.recordingName && (
          <span className="text-red-500 text-sm">
            {errors.recordingName.message}
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
        <select
          {...register("category", { required: "Category is required" })}
          className="w-full rounded-md border border-[#C6C6C6] outline-0 px-3 p-2"
        >
          <option value="" disabled>
            Select a category
          </option>
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
            </option>
          ))}
        </select>
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
          {...register("bannerImage", {
            required: "Banner image is required",
          })}
          className="w-full rounded-md border border-[#C6C6C6] outline-0 px-3 p-2"
        />
        {errors.bannerImage && (
          <span className="text-red-500 text-sm">
            {errors.bannerImage.message}
          </span>
        )}
      </div>

      {/* Submit Button */}
      <div className="flex items-center justify-end gap-3">
      <button
        type="submit"
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