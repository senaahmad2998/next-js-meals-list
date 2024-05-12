"use client";

import { useFormStatus } from "react-dom";

export default function MealShareSubmit() {
  const { pending } = useFormStatus();
  return (
    <button type="submit" disabled={pending}>
      {pending ? "Submitting..." : "Submit"}
    </button>
  );
}
