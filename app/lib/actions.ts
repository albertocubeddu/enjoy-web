"use server";

export async function createSport(formData: FormData) {
  const rawFormData = {
    name: formData.get("name"),
    image: formData.get("image") as Blob,
  };

  console.log(rawFormData);
}
