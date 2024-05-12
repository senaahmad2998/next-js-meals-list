"use client";

import { useRef, useState } from "react";
import styles from "./image-picker.module.css";
import Image from "next/image";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const inputImageRef = useRef();

  function handlerPickImage() {
    inputImageRef.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };

    fileReader.readAsDataURL(file);
  }

  return (
    <div className={styles.picker}>
      <label htmlFor={name}>{label}</label>
      <div className={styles.controls}>
        <div className={styles.preview}>
          {!pickedImage && <p>No Image picked yet</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image selected by the user."
              fill
            />
          )}
        </div>
        <input
          ref={inputImageRef}
          className={styles.input}
          type="file"
          id={name}
          accept="image/png, image/jpg"
          name={name}
          onChange={handleImageChange}
          required
        />
        <button
          type="button"
          className={styles.button}
          onClick={handlerPickImage}
        >
          Pick an Image
        </button>
      </div>
    </div>
  );
}
